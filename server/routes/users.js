var express = require('express');
var router = express.Router();

Users = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log('GET USER ERROR: ', err);
    })
});

/* POST user. */
router.post('/', (req, res, next) => {
  const newUser = new Users({
    Email: req.body.email,
    Password: req.body.password
  })
  newUser
    .save()
    .then(user => {
      res.json({user, msg: 'Success'})
    })
    .catch(err => {
      console.log('CREATE USER ERROR: ', err);
    });
})

// login
router.post('/login', function(req, res, next) {
  var UserData = {
    Email: req.body.email,
    Password: req.body.password
  }

  User.findOne({'Email': UserData.Email}, (err, docs) => {
    if (err) return res.send("error");
    else if (docs == null) return "invalid email"; //if invalid email
    else if (docs.password != UserData.Password) return "incorrect password"; //if invalid password
    else if (docs.password == UserData.Password) return docs; //if login successfull
  }).exec( (err, user) => {
    req.session.user = user;
    res.redirect('/profile');
  });

});

// sign up
router.post('/signup', (req, res, next) => {

  var Allergies = req.body.allergies.split(',');

  Allergies.forEach(function(allergy, index) {
    Allergies[index] = allergy.trim()
  });


  const newUser = new Users({
    Email: req.body.email,
    Password: req.body.password
    Name: req.body.name
    PhoneNumber: req.body.phonenumber
    Address: req.body.address
    Allergies: Allergies
    Admin: false
  })
  newUser
    .save()
    .then(user => {
      req.session.user = user;
      res.json({user, msg: 'Success'})
    })
    .catch(err => {
      console.log('CREATE USER ERROR: ', err);
    });
});


// logout
router.get('/logout', function(req,res,next) {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;

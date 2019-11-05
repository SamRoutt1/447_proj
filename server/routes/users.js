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

module.exports = router;

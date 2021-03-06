var express = require('express');
var router = express.Router();
var Order = require('../models/Order');
var User = require('../models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
	Order.find({}, (err, docs) => {
		console.log(docs);
 		if (err) return res.send("error");
 		else if (docs == null) return "No search found";
 		console.log("returning result");
 		// console.log(docs[0]);
 		return docs;
 	}).exec( (err, order) => {
 		res.render('index',{ title: 'Food Queue', order: order});
 	});
  // res.render('index', { title: 'Food Queue' });
});

router.get('/addItem', function(req, res, next) {
	
  res.render('addItem', { title: 'Food Queue' });
});

router.post('/createOrder', function(req, res, next) {
	// console.log(req.body);
	var FoodItem = req.body.FoodItem
	var CustomerName = req.body.CustomerName
	var PhoneNumber = req.body.PhoneNumber
	var PickupOrDelivery = req.body.PickupOrDelivery
	var Address = req.body.Address
	var PickUpDeliveryTime = req.body.PickUpDeliveryTime
	var Allergies = req.body.Allergies.split(',')
	var SpecialInstructions = req.body.SpecialInstructions


	Allergies.forEach(function(allergy, index) {
		Allergies[index] = allergy.trim()
	});

	var newOrder = new Order({
		FoodItem: FoodItem,
		CustomerName: CustomerName,
		PhoneNumber: PhoneNumber,
		TimeStamp: new Date().getTime(),
		PickupOrDelivery: PickupOrDelivery,
		Address: Address,
		PickUpDeliveryTime: PickUpDeliveryTime,
		Allergies: Allergies,
		SpecialInstructions: SpecialInstructions
	});
	newOrder.save();
	console.log(newOrder);
	res.redirect('/');

});

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

module.exports = router;

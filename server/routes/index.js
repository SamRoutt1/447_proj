var express = require('express');
var router = express.Router();
var Order = require('../models/Order');

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
	var PickUpTime = req.body.PickUpTime
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
		PickUpTime: PickUpTime,
		Allergies: Allergies,
		SpecialInstructions: SpecialInstructions
	});

	console.log(newOrder);
	res.redirect('/')

});

module.exports = router;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
	FoodItem: String,
	CustomerName: String,
	PhoneNumber: String,
	TimeStamp: Date,
	PickupOrDelivery: String,
	Address: String,
	PickUpDeliveryTime: String,
	Allergies: Array,
	SpecialInstructions: String
});


var Order = mongoose.model('orders', OrderSchema);


module.exports = Order;
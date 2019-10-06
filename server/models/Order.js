var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
	FoodItem: String,
	CustomerName: String,
	PhoneNumber: String,
	TimeStamp: Date,
	PickupOrDelivery: Boolean,
	Address: String,
	PickUpDeliveryTime: Date,
	Allergies: Array,
	SpecialInstructions: String
});


var Order = mongoose.model('orders', OrderSchema);


module.exports = Order;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  Email: String,
  Password: String,
  Name: String,
  PhoneNumber: String,
  Address: String,
  Allergies: String
});

var User = mongoose.model('users', UserSchema);

module.exports = User;
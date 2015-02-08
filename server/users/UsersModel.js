var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  id: {
    type: String
  },
  username: {
    type: String,
    required: true
    },
  password: {
    type: String,
    required: true
  }
});




module.exports = mongoose.model('User', UserSchema);
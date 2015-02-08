var mongoose = require('mongoose');

var ListsSchema = new mongoose.Schema({
  id: {
    type: String
  },
  title: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Lists', ListsSchema);
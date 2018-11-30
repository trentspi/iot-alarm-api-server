var mongoose = require('mongoose');
var Schema= mongoose.schema

module.exports = mongoose.model('text', {
  context: String,
  color: String,
  text: String,
  position: Number
});
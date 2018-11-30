var mongoose = require('mongoose');
var Schema= mongoose.schema

module.exports = mongoose.model('weather', {
  context: String,
  color: String,
  city: String,
  position: Number
});
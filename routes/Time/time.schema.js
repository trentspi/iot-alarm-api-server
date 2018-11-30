var mongoose = require('mongoose');
var Schema= mongoose.schema

module.exports = mongoose.model('time', {
  context: String,
  color: String,
  format24: Boolean,
  position: Number
});
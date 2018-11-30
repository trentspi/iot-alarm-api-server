var mongoose = require('mongoose');
var Schema= mongoose.schema

module.exports = mongoose.model('date', {
  context: String,
  color: String,
  showFullDate: Boolean,
  position: Number
});
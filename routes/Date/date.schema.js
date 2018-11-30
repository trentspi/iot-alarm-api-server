var mongoose = require('mongoose');
var Schema= mongoose.schema

module.exports = mongoose.model('date', {
  context: String,
  color: {
    r: Number,
    g: Number,
    b: Number
  },
  showFullDate: Boolean,
  position: Number
});
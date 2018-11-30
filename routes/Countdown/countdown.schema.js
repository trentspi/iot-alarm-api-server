var mongoose = require('mongoose');
var Schema= mongoose.schema

module.exports = mongoose.model('countdown', {
  context: String,
  color: {
    r: Number,
    g: Number,
    b: Number
  },
  position: Number
});
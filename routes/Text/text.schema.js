var mongoose = require('mongoose');
var Schema= mongoose.schema

module.exports = mongoose.model('text', {
  context: String,
  color: {
    r: Number,
    g: Number,
    b: Number
  },
  text: String,
  position: Number
});
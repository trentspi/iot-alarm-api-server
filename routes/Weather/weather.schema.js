var mongoose = require('mongoose');
var Schema= mongoose.schema

module.exports = mongoose.model('weather', {
  context: String,
  color: {
    r: Number,
    g: Number,
    b: Number
  },
  city: String,
  position: Number
});
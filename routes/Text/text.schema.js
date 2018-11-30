var mongoose = require('mongoose');

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
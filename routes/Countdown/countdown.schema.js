var mongoose = require('mongoose');

module.exports = mongoose.model('countdown', {
  context: String,
  color: {
    r: Number,
    g: Number,
    b: Number
  },
  position: Number
});
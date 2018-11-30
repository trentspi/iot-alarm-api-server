var mongoose = require('mongoose');

module.exports = mongoose.model('nextalarm', {
  context: String,
  color: {
    r: Number,
    g: Number,
    b: Number
  },
  position: Number
});
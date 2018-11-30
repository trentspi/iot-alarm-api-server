var mongoose = require('mongoose');

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
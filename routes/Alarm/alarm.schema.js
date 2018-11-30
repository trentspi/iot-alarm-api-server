const shortid = require('shortid');
var mongoose = require('mongoose');

module.exports = mongoose.model('alarm', {
  _id: {
    'type': String,
    'default': shortid.generate
  },
  name: String,
  color: {
    r: Number,
    g: Number,
    b: Number
  },
  hour: Number,
  min: Number,
  days: {
    monday: Boolean,
    tuesday: Boolean,
    wednesday: Boolean,
    thursday: Boolean,
    friday: Boolean,
    saturday: Boolean,
    sunday: Boolean
  }
});
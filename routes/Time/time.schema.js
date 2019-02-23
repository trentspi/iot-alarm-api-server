const mongoose = require("mongoose");

module.exports = mongoose.model("time", {
  context: String,
  color: {
    r: Number,
    g: Number,
    b: Number
  },
  format24: Boolean,
  position: Number
});

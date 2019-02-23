const mongoose = require("mongoose");

module.exports = mongoose.model("weather", {
  context: String,
  color: {
    r: Number,
    g: Number,
    b: Number
  },
  city: String,
  position: Number
});

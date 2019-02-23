const express = require("express");
const router = express.Router();

const Weather = require("./weather.schema");

function seedIfNeeded() {
  Weather.findOne({ context: "weather" }, (err, obj) => {
    if (err) return console.error(err);
    if (obj === null) {
      let doc = new Weather({
        context: "weather",
        color: {
          r: 255,
          g: 255,
          b: 255
        },
        city: "Indianapolis",
        position: -1
      });
      doc.save(function(err) {
        if (err) return next(err);
      });
    }
  });
}

router.get("/", function(req, res) {
  Weather.find({ context: "weather" }).then(function(obj, err) {
    if (err) res.status(500).send(err);
    res.json(obj);
  });
});

router.patch("/", function(req, res) {
  Weather.findOneAndUpdate(
    { context: "weather" },
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) console.error(err);
    }
  );
  res.send({ message: "Successfully updated Weather settings!" });
});

module.exports = router;
module.exports.seedIfNeeded = seedIfNeeded;

const express = require("express");
const router = express.Router();

const Time = require("./time.schema");

function seedIfNeeded() {
  Time.findOne({ context: "time" }, function(err, obj) {
    if (err) return console.error(err);
    if (obj === null) {
      let doc = new Time({
        context: "time",
        color: {
          r: 255,
          g: 255,
          b: 255
        },
        format24: false,
        position: -1
      });
      doc.save(function(err) {
        if (err) return next(err);
      });
    }
  });
}

router.get("/", function(req, res) {
  Time.find({ context: "time" }).then(function(time, err) {
    if (err) res.status(500).send(err);
    res.json(time);
  });
});

router.patch("/", function(req, res) {
  Time.findOneAndUpdate(
    { context: "time" },
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) console.error(err);
    }
  );
  res.send({ message: "Successfully updated Time settings!" });
});

module.exports = router;
module.exports.seedIfNeeded = seedIfNeeded;

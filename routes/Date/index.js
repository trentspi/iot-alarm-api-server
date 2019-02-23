const express = require("express");
const router = express.Router();

const _Date = require("./date.schema");

function seedIfNeeded() {
  _Date.findOne({ context: "date" }, function(err, obj) {
    if (err) return console.error(err);
    if (obj === null) {
      let doc = new _Date({
        context: "date",
        color: {
          r: 255,
          g: 255,
          b: 255
        },
        showFullDate: false,
        position: -1
      });
      doc.save(function(err) {
        if (err) return next(err);
      });
    }
  });
}

router.get("/", (req, res) => {
  _Date.find({ context: "date" }).then((obj, err) => {
    if (err) res.status(500).send(err);
    res.json(obj);
  });
});

router.patch("/", function(req, res) {
  _Date.findOneAndUpdate(
    { context: "date" },
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) console.error(err);
    }
  );
  res.send({ message: "Successfully updated Date settings!" });
});

module.exports = router;
module.exports.seedIfNeeded = seedIfNeeded;

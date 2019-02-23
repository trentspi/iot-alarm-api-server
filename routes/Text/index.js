const express = require("express");
const router = express.Router();

const Text = require("./text.schema");

function seedIfNeeded() {
  Text.findOne({ context: "text" }, function(err, obj) {
    if (err) return console.error(err);
    if (obj === null) {
      let doc = new _Text({
        context: "text",
        color: {
          r: 255,
          g: 255,
          b: 255
        },
        text: "Placeholder text",
        position: -1
      });
      doc.save(function(err) {
        if (err) return next(err);
      });
    }
  });
}

router.get("/", function(req, res) {
  _Text.find({ context: "text" }).then(function(obj, err) {
    if (err) res.status(500).send(err);
    res.json(obj);
  });
});

router.patch("/", function(req, res) {
  _Text.findOneAndUpdate(
    { context: "text" },
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (err) console.error(err);
    }
  );
  res.send({ message: "Successfully updated Text settings!" });
});

module.exports = router;
module.exports.seedIfNeeded = seedIfNeeded;

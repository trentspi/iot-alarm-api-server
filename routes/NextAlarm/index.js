let express = require('express');
let router = express.Router();

let NextAlarm = require('./nextalarm.schema');

function seed() {
  NextAlarm.findOne({ context: 'nextalarm' }, function (err, obj) {
    if (err) return console.error(err);
    if (obj === null) {
      let doc = new NextAlarm({
        context: 'nextalarm',
        color: {
          r: 255,
          g: 255,
          b: 255
        },
        position: -1,
        displayAsCountdown: false
      });
      doc.save(function (err) {
        if (err) return next(err);
      });
    }
  });
}

router.get('/', (req, res) => {
  NextAlarm.find({'context': 'nextalarm'}).then((obj, err) => {
    if (err) res.status(500).send(err);
    res.json(obj);
  })
})

router.patch('/', (req, res) => {
  NextAlarm.findOneAndUpdate({ context: 'nextalarm' }, { $set: req.body }, { new: true }, (err, doc) => {
    if (err) console.error(err);
  });
  res.send({ message: "Successfully updated NextAlarm settings!" });
})

module.exports = router;
module.exports.seed = seed;
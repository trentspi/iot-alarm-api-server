const express = require('express');
const router = express.Router();

const Alarm = require('./alarm.schema');

router.get('/', (req, res) => {
  Alarm.find({}).then((alarms, err) => {
    if (err) console.error(err);
    res.send(alarms);
  });
})

router.get('/:id', (req, res) => {
  Alarm.findOne({ _id: req.params.id }).then((alarm, err) => {
    if (err) console.error(err);
    res.send(alarm);
  });
});

router.post('/', (req, res) => {
  Alarm.create({
    name: req.body.name,
    color: req.body.color,
    hour: req.body.hour,
    min: req.body.min,
    days: req.body.days,
    enabled: req.body.enabled
  }).then((alarm, err) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(alarm);
  });
});

router.delete('/:id', function (req, res) {
  Alarm.deleteOne({ _id: req.params.id }, (err) => {
    if (err) console.error(err);
    res.send({ success: true, message: "Deleted Alarm ID: " + req.params.id });
  });
});

module.exports = router;
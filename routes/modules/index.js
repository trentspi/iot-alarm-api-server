const express = require("express");
const router = express.Router();

const NextAlarmSchema = require("../nextalarm/nextalarm.schema.js");
const _Date = require("../date/date.schema.js");
const _Text = require("../text/text.schema.js");
const Time = require("../time/time.schema.js");
const Weather = require("../weather/weather.schema.js");

router.get("/", function(req, res) {
  Time.find({ context: "time" }).then(function(time, err) {
    if (err) res.status(500).send(err);

    NextAlarmSchema.find({ context: "nextalarm" }).then(function(
      nextalarm,
      err
    ) {
      if (err) res.status(500).send(err);

      _Date.find({ context: "date" }).then(function(date, err) {
        if (err) res.status(500).send(err);

        Weather.find({ context: "weather" }).then(function(weather, err) {
          if (err) res.status(500).send(err);

          _Text.find({ context: "text" }).then(function(text, err) {
            if (err) res.status(500).send(err);

            res.json({
              time: time[0].position,
              nextalarm: nextalarm[0].position,
              date: date[0].position,
              weather: weather[0].position,
              text: text[0].position
            });
          });
        });
      });
    });
  });
});

router.patch("/", function(req, res) {
  if (req.body.date || req.body.date == 0) {
    _Date.findOneAndUpdate(
      { context: "date" },
      { $set: { position: req.body.date } },
      { new: true },
      (err, doc) => {
        if (err) console.error(err);
      }
    );
  }
  if (req.body.time || req.body.time === 0) {
    Time.findOneAndUpdate(
      { context: "time" },
      { $set: { position: req.body.time } },
      { new: true },
      (err, doc) => {
        if (err) console.error(err);
      }
    );
  }
  if (req.body.nextalarm || req.body.nextalarm === 0) {
    NextAlarm.findOneAndUpdate(
      { context: "nextalarm" },
      { $set: { position: req.body.nextalarm } },
      { new: true },
      (err, doc) => {
        if (err) console.error(err);
      }
    );
  }
  if (req.body.weather || req.body.weather === 0) {
    Weather.findOneAndUpdate(
      { context: "weather" },
      { $set: { position: req.body.weather } },
      { new: true },
      (err, doc) => {
        if (err) console.error(err);
      }
    );
  }
  if (req.body.text || req.body.text === 0) {
    _Text.findOneAndUpdate(
      { context: "text" },
      { $set: { position: req.body.text } },
      { new: true },
      (err, doc) => {
        if (err) console.errors(err);
      }
    );
  }
  res.send({ success: true, message: "Successfully updated positions" });
});

module.exports = router;

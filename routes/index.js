const express = require("express");
const router = express.Router();

const AlarmsModule = require("./alarms");
const NextAlarmModule = require("./nextalarm");
const DateModule = require("./date");
const TextModule = require("./text");
const TimeModule = require("./time");
const WeatherModule = require("./weather");
const PositionsRouter = require("./modules");

// Seed initial module positions if needed
NextAlarmModule.seedIfNeeded();
DateModule.seedIfNeeded();
TextModule.seedIfNeeded();
TimeModule.seedIfNeeded();
WeatherModule.seedIfNeeded();

/* GET/GET ONE/PATCH/DELETE Alarms */
router.use("/alarms", AlarmsModule);

/* Next Alarm Display Module Settings */
router.use("/nextalarm", NextAlarmModule);

/* Current Date Display Module Settings */
router.use("/date", DateModule);

/* Predefined Text Display Module Settings */
router.use("/text", TextModule);

/* Current Time Display Module Settings */
router.use("/time", TimeModule);

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "IOT Alarm Clock" });
});

router.use("/modules", PositionsRouter);

// router.patch("/modules", function(req, res) {
//   if (req.body.date || req.body.date == 0) {
//     _Date.findOneAndUpdate(
//       { context: "date" },
//       { $set: { position: req.body.date } },
//       { new: true },
//       (err, doc) => {
//         if (err) console.error(err);
//       }
//     );
//   }
//   if (req.body.time || req.body.time === 0) {
//     Time.findOneAndUpdate(
//       { context: "time" },
//       { $set: { position: req.body.time } },
//       { new: true },
//       (err, doc) => {
//         if (err) console.error(err);
//       }
//     );
//   }
//   if (req.body.nextalarm || req.body.nextalarm === 0) {
//     NextAlarm.findOneAndUpdate(
//       { context: "nextalarm" },
//       { $set: { position: req.body.nextalarm } },
//       { new: true },
//       (err, doc) => {
//         if (err) console.error(err);
//       }
//     );
//   }
//   if (req.body.weather || req.body.weather === 0) {
//     Weather.findOneAndUpdate(
//       { context: "weather" },
//       { $set: { position: req.body.weather } },
//       { new: true },
//       (err, doc) => {
//         if (err) console.error(err);
//       }
//     );
//   }
//   if (req.body.text || req.body.text === 0) {
//     _Text.findOneAndUpdate(
//       { context: "text" },
//       { $set: { position: req.body.text } },
//       { new: true },
//       (err, doc) => {
//         if (err) console.errors(err);
//       }
//     );
//   }
//   res.send({ success: true, message: "Successfully updated positions" });
// });

// router.get('/alarms/:id', function(req,res) {
//   Alarm.findOne({_id: req.params.id}).then(function(alarm, err) {
//     if(err) console.error(err);
//     res.send(alarm);
//   });
// });

// router.get('/alarms', function(req,res) {
//   Alarm.find({}).then(function(alarms, err) {
//     if(err) console.error(err);
//     res.send(alarms);
//   });
// });

// router.patch('/alarms/:id', function(req,res) {
//   Alarm.findOneAndUpdate({_id: req.params.id}, {$set:req.body}, {new: true}, (err, doc) => {
//     if (err) console.error(err);
//   });
//   res.send({success: true, message: "Successfully updated Alarm ID: " + req.params.id});

// });

// router.post('/alarms', function(req,res) {
//   Alarm.create({
//     name: req.body.name,
//     color: req.body.color,
//     hour: req.body.hour,
//     min: req.body.min,
//     days: req.body.days,
//     enabled: req.body.enabled
//   }).then(function (alarm, err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//     res.json(alarm);
//   });
// });

// router.delete('/alarms/:id', function(req,res) {
//   Alarm.deleteOne({_id: req.params.id}, function(err) {
//     if(err) console.error(err);
//     res.send({success: true, message: "Deleted Alarm ID: " + req.params.id});
//   });
// });

// router.get('/nextalarm', function(req,res) {
//   NextAlarm.find({'context': 'nextalarm'}).then(function(obj, err) {
//     if (err) res.status(500).send(err);
//     res.json(obj);
//   });
// });

// router.get('/date', function(req,res) {
//   _Date.find({'context': 'date'}).then(function(obj, err) {
//     if (err) res.status(500).send(err);
//     res.json(obj);
//   });
// });

// router.get("/text", function(req, res) {
//   _Text.find({ context: "text" }).then(function(obj, err) {
//     if (err) res.status(500).send(err);
//     res.json(obj);
//   });
// });

// router.get("/time", function(req, res) {
//   Time.find({ context: "time" }).then(function(time, err) {
//     if (err) res.status(500).send(err);
//     res.json(time);
//   });
// });

// router.get("/weather", function(req, res) {
//   Weather.find({ context: "weather" }).then(function(obj, err) {
//     if (err) res.status(500).send(err);
//     res.json(obj);
//   });
// });

// router.patch('/nextalarm', function(req,res) {
//   NextAlarm.findOneAndUpdate({context: 'nextalarm'}, {$set:req.body}, {new: true}, (err, doc) => {
//     if (err) console.error(err);
//   });

//   res.send({message: "Successfully updated NextAlarm settings!"});
// });

// router.patch('/date', function(req,res) {
//   _Date.findOneAndUpdate({context: 'date'}, {$set:req.body}, {new: true}, (err, doc) => {
//     if (err) console.error(err);
//   });

//   res.send({message: "Successfully updated Date settings!"});
// });

// router.patch("/text", function(req, res) {
//   _Text.findOneAndUpdate(
//     { context: "text" },
//     { $set: req.body },
//     { new: true },
//     (err, doc) => {
//       if (err) console.error(err);
//     }
//   );
//   res.send({ message: "Successfully updated Text settings!" });
// });

// router.patch("/time", function(req, res) {
//   Time.findOneAndUpdate(
//     { context: "time" },
//     { $set: req.body },
//     { new: true },
//     (err, doc) => {
//       if (err) console.error(err);
//     }
//   );
//   res.send({ message: "Successfully updated Time settings!" });
// });
// router.patch("/weather", function(req, res) {
//   Weather.findOneAndUpdate(
//     { context: "weather" },
//     { $set: req.body },
//     { new: true },
//     (err, doc) => {
//       if (err) console.error(err);
//     }
//   );
//   res.send({ message: "Successfully updated Weather settings!" });
// });

module.exports = router;

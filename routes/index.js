var express = require('express');
var router = express.Router();

var Countdown = require('./Countdown/countdown.schema.js');
var _Date = require('./Date/date.schema.js');
var _Text = require('./Text/text.schema.js');
var Time = require('./Time/time.schema.js');
var Weather = require('./Weather/weather.schema.js');
var Alarm = require('./Alarm/alarm.schema.js');

Countdown.findOne({context: 'countdown'}, function(err, obj) {
  if (err) return console.error(err);
  if (obj === null) {
    let doc = new Countdown({
      context: 'countdown',
      color: {
        r: 255,
        g: 255,
        b: 255
      },
      position: -1
    });
    doc.save(function(err) {
      if(err) return next(err);
    });
  }
});

_Date.findOne({context: 'date'}, function(err, obj) {
  if (err) return console.error(err);
  if (obj === null) {
    let doc = new _Date({
      context: 'date',
      color: {
        r: 255,
        g: 255,
        b: 255
      },
      showFullDate: false,
      position: -1
    });
    doc.save(function(err) {
      if(err) return next(err);
    });
  }
});

_Text.findOne({context: 'text'}, function(err, obj) {
  if (err) return console.error(err);
  if (obj === null) {
    let doc = new _Text({
      context: 'text',
      color: {
        r: 255,
        g: 255,
        b: 255
      },
      text: 'Placeholder text',
      position: -1
    });
    doc.save(function(err) {
      if(err) return next(err);
    });
  }
});

Time.findOne({context: 'time'}, function(err, obj) {
  if (err) return console.error(err);
  if (obj === null) {
    let doc = new Time({
      context: 'time',
      color: {
        r: 255,
        g: 255,
        b: 255
      },
      format24: false,
      position: -1
    });
    doc.save(function(err) {
      if(err) return next(err);
    });
  }
});

Weather.findOne({context: 'weather'}, function(err, obj) {
  if (err) return console.error(err);
  if (obj === null) {
    let doc = new Weather({
      context: 'weather',
      color: {
        r: 255,
        g: 255,
        b: 255
      },
      city: 'Indianapolis',
      position: -1
    });
    doc.save(function(err) {
      if(err) return next(err);
    });
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IOT Alarm Clock' });
});

router.get('/alarm/:id', function(req,res) {
  Alarm.findOne({_id: req.params.id}).then(function(alarm, err) {
    if(err) res.error(err);
    res.send(alarm);
  });
});

router.get('/alarm', function(req,res) {
  Alarm.find({}).then(function(alarms, err) {
    if(err) res.error(err);
    res.send(alarms);
  });
});

router.post('/alarm', function(req,res) {
  var alarm = new Alarm({
    name: req.body.name,
    color: req.body.color,
    hour: req.body.hour,
    min: req.body.min,
    days: req.body.days,
    position: req.body.position
  });
  alarm.save(function(err) {
    if(err) return next(err);
  });
  res.json(alarm);
});

router.get('/countdown', function(req,res) {
  Countdown.find({'context': 'countdown'}).then(function(obj, err) {
    if (err) res.status(500).send(err);
    res.json(obj);
  });
});
router.get('/date', function(req,res) {
  _Date.find({'context': 'date'}).then(function(obj, err) {
    if (err) res.status(500).send(err);
    res.json(obj);
  });
});
router.get('/text', function(req,res) {
  _Text.find({'context': 'text'}).then(function(obj, err) {
    if (err) res.status(500).send(err);
    res.json(obj);
  });
});
router.get('/time', function(req, res) {
  Time.find({'context': 'time'}).then(function(time, err) {
    if (err) res.status(500).send(err);
    res.json(time);
  });
});
router.get('/weather', function(req,res) {
  Weather.find({'context': 'weather'}).then(function(obj, err) {
    if (err) res.status(500).send(err);
    res.json(obj);
  });
});

router.patch('/countdown', function(req,res) {
  if(req.body.color) {
    Countdown.findOneAndUpdate({context: 'countdown'}, {$set:{color:req.body.color}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.position) {
    Countdown.findOneAndUpdate({context: 'countdown'}, {$set:{position:req.body.position}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  res.send({message: "Successfully updated Countdown settings!"});
});  
router.patch('/date', function(req,res) {
  if(req.body.color) {
    _Date.findOneAndUpdate({context: 'date'}, {$set:{color:req.body.color}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.position) {
    _Date.findOneAndUpdate({context: 'date'}, {$set:{position:req.body.position}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.showFullDate) {
    _Date.findOneAndUpdate({context: 'date'}, {$set:{showFullDate:req.body.showFullDate}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  res.send({message: "Successfully updated Date settings!"});
});  
router.patch('/text', function(req,res) {
  if(req.body.color) {
    _Text.findOneAndUpdate({context: 'text'}, {$set:{color:req.body.color}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.text) {
    _Text.findOneAndUpdate({context: 'text'}, {$set:{text:req.body.text}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.position) {
    _Text.findOneAndUpdate({context: 'text'}, {$set:{position:req.body.position}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  res.send({message: "Successfully updated Text settings!"});
});  
router.patch('/time', function(req,res) {

  if(req.body.color) {
    Time.findOneAndUpdate({context: 'time'}, {$set:{color:req.body.color}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.format24) {
    Time.findOneAndUpdate({context: 'time'}, {$set:{format24:req.body.format24}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.position) {
    Time.findOneAndUpdate({context: 'time'}, {$set:{position:req.body.position}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  res.send({message: "Successfully updated Time settings!"});
  
});
router.patch('/weather', function(req,res) {
  if(req.body.color) {
    Weather.findOneAndUpdate({context: 'weather'}, {$set:{color:req.body.color}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.city) {
    Weather.findOneAndUpdate({context: 'weather'}, {$set:{city:req.body.city}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.position) {
    Weather.findOneAndUpdate({context: 'weather'}, {$set:{position:req.body.position}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  res.send({message: "Successfully updated Weather settings!"});
});  


module.exports = router;

var express = require('express');
var router = express.Router();

var NextAlarm = require('./NextAlarm/nextalarm.schema.js');
var _Date = require('./Date/date.schema.js');
var _Text = require('./Text/text.schema.js');
var Time = require('./Time/time.schema.js');
var Weather = require('./Weather/weather.schema.js');
var Alarm = require('./Alarm/alarm.schema.js');

NextAlarm.findOne({context: 'nextalarm'}, function(err, obj) {
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

router.get('/modules', function(req,res) {
  Time.find({'context': 'time'}).then(function(time, err) {
    if (err) res.status(500).send(err);
    
    NextAlarm.find({'context': 'nextalarm'}).then(function(nextalarm, err) {
      if(err) res.status(500).send(err);

      _Date.find({'context': 'date'}).then(function(date, err) {
        if(err) res.status(500).send(err);

        Weather.find({'context': 'weather'}).then(function(weather, err) {
          if(err) res.status(500).send(err);

          _Text.find({'context': 'text'}).then(function(text, err) {
            if(err) res.status(500).send(err);

            res.json ({
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

router.patch('/modules', function(req,res) {
  if(req.body.date !== null) {
    _Date.findOneAndUpdate({context: 'date'}, {$set:{position:req.body.date}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.time !== null) {
    Time.findOneAndUpdate({context: 'time'}, {$set:{position:req.body.time}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.nextalarm !== null) {
    NextAlarm.findOneAndUpdate({context: 'nextalarm'}, {$set:{position:req.body.nextalarm}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.weather !== null) {
    Weather.findOneAndUpdate({context: 'weather'}, {$set:{position:req.body.weather}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.text !== null) {
    _Text.findOneAndUpdate({context: 'text'}, {$set:{position:req.body.text}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  res.send({success: true, message: "Successfully updated positions"});
});

router.get('/alarms/:id', function(req,res) {
  Alarm.findOne({_id: req.params.id}).then(function(alarm, err) {
    if(err) console.error(err);
    res.send(alarm);
  });
});

router.get('/alarms', function(req,res) {
  Alarm.find({}).then(function(alarms, err) {
    if(err) console.error(err);
    res.send(alarms);
  });
});

router.patch('/alarms/:id', function(req,res) {
  if(req.body.name !== null) {
    Alarm.findOneAndUpdate({_id: req.params.id}, {$set:{name:req.body.name}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.color !== null) {
    Alarm.findOneAndUpdate({_id: req.params.id}, {$set:{color:req.body.color}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.hour !== null) {
    Alarm.findOneAndUpdate({_id: req.params.id}, {$set:{hour:req.body.hour}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.min !== null) {
    Alarm.findOneAndUpdate({_id: req.params.id}, {$set:{min:req.body.min}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.days !== null) {
    Alarm.findOneAndUpdate({_id: req.params.id}, {$set:{days:req.body.days}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.enabled !== null) {
    Alarm.findOneAndUpdate({_id: req.params.id}, {$set:{enabled:req.body.enabled}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  res.send({success: true, message: "Successfully updated Alarm ID: " + req.params.id});

});

router.post('/alarms', function(req,res) {
  var alarm = new Alarm({
    name: req.body.name,
    color: req.body.color,
    hour: req.body.hour,
    min: req.body.min,
    days: req.body.days,
    enabled: req.body.enabled
  });
  alarm.save(function(err) {
    if(err) return next(err);
  });
  res.json(alarm);
});

router.delete('/alarms/:id', function(req,res) {
  Alarm.deleteOne({_id: req.params.id}, function(err) {
    if(err) console.error(err);
    res.send({success: true, message: "Deleted Alarm ID: " + req.params.id});
  });
});

router.get('/nextalarm', function(req,res) {
  NextAlarm.find({'context': 'nextalarm'}).then(function(obj, err) {
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

router.patch('/nextalarm', function(req,res) {
  if(req.body.color !== null) {
    NextAlarm.findOneAndUpdate({context: 'nextalarm'}, {$set:{color:req.body.color}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.position !== null) {
    NextAlarm.findOneAndUpdate({context: 'nextalarm'}, {$set:{position:req.body.position}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.displayAsCountdown !== null) {
    NextAlarm.findOneAndUpdate({context: 'nextalarm'}, {$set:{displayAsCountdown:req.body.displayAsCountdown}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  } 
  
  res.send({message: "Successfully updated NextAlarm settings!"});
});  
router.patch('/date', function(req,res) {
  if(req.body.color !== null) {
    _Date.findOneAndUpdate({context: 'date'}, {$set:{color:req.body.color}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.position !== null) {
    _Date.findOneAndUpdate({context: 'date'}, {$set:{position:req.body.position}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.showFullDate !== null) {
    _Date.findOneAndUpdate({context: 'date'}, {$set:{showFullDate:req.body.showFullDate}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  res.send({message: "Successfully updated Date settings!"});
});  
router.patch('/text', function(req,res) {
  if(req.body.color !== null) {
    _Text.findOneAndUpdate({context: 'text'}, {$set:{color:req.body.color}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.text !== null) {
    _Text.findOneAndUpdate({context: 'text'}, {$set:{text:req.body.text}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.position !== null) {
    _Text.findOneAndUpdate({context: 'text'}, {$set:{position:req.body.position}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  res.send({message: "Successfully updated Text settings!"});
});  
router.patch('/time', function(req,res) {

  if(req.body.color !== null) {
    Time.findOneAndUpdate({context: 'time'}, {$set:{color:req.body.color}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.format24 !== null) {
    Time.findOneAndUpdate({context: 'time'}, {$set:{format24:req.body.format24}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.position !== null) {
    Time.findOneAndUpdate({context: 'time'}, {$set:{position:req.body.position}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  res.send({message: "Successfully updated Time settings!"});
  
});
router.patch('/weather', function(req,res) {
  if(req.body.color !== null) {
    Weather.findOneAndUpdate({context: 'weather'}, {$set:{color:req.body.color}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.city !== null) {
    Weather.findOneAndUpdate({context: 'weather'}, {$set:{city:req.body.city}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  if(req.body.position !== null) {
    Weather.findOneAndUpdate({context: 'weather'}, {$set:{position:req.body.position}}, {new: true}, (err, doc) => {
      if (err) console.error(err);
    });
  }
  res.send({message: "Successfully updated Weather settings!"});
});  


module.exports = router;

# iotAlarmClock

## Routes

| Path | Allowed HTTP method | Description |
|-|-|-|
| `/time` | GET, PATCH | Get / update settings record |
| `/nextalarm` | GET, PATCH | Get / update settings record |
| `/date` | GET, PATCH | Get / update settings record |
| `/weather` | GET, PATCH | Get / update settings record |
| `/text` | GET, PATCH | Get / update settings record |
| `/alarms` | GET | Return list of all alarms |
| `/alarms/:id` | GET, PATCH | Return alarm data of id / update alarm |
| `/alarms` | POST | Create an alarm, id is generated |
| `/modules` | GET | Return position value of all widgets |

## Master Collection

```
{
  Alarm: {
    _id: String,
    name: String,
    color: {
      r: Number,
      g: Number,
      b: Number
    },
    hour: Number,
    min: Number,
    days: {
      monday: Boolean,
      tuesday: Boolean,
      wednesday: Boolean,
      thursday: Boolean,
      friday: Boolean,
      saturday: Boolean,
      sunday: Boolean
    }
  },
  Time:
  {
    color: {
      r: Number,
      g: Number,
      b: Number
    },
    format24: Boolean,
    position: Number
  },
  NextAlarm:
  {
    color: {
      r: Number,
      g: Number,
      b: Number
    },
    countdown: Boolean,
    position: Number
  },
  Date: {
    color: {
      r: Number,
      g: Number,
      b: Number
    },
    position: Number,
    showFullDate: Boolean
  },
  Weather:
  {
    color: {
      r: Number,
      g: Number,
      b: Number
    },
    city: String,
    position: Number
  },
  Text:
  {
    color: {
      r: Number,
      g: Number,
      b: Number
    },
    text: String,
    position: Number
  }
}
```

## Widgets / Configuration

### Time

A widget for showing the current time on the display.

| Property | Type | Description |
|-|-|-|
| color | Obj | Changes color of rendered text |
| format24 | bool | Use 24 hour time instead of 12 |
| position | int | position on matrix between 1-4 , else disabled |

### Alarm Time

Data that is responsible for setting an alarm (allow for repeatable), optionally show a reminder on the display (Next Alarm).

| Property | Type | Description |
|-|-|-|
| name | string | Title/descriptor of the alarm |
| color | Obj | Changes color of rendered text |
| enabled | bool | Alarm on/off |
| hour | int | Hour value of stored alarm (using 24 hour model) |
| min | int | Minute value of stored alarm |
| days | Obj | Object with days as keys, used for repeating alarms |

### Next Alarm

A widget that displays when your next alarm is, eg -- Alarm 3 is set to go off at 7:00 AM   
Can be set to show a countdown of when your next alarm is, eg -- Alarm 3 will go off in 3 hours and 15 minutes.

| Property | Type | Description |
|-|-|-|
| color | Obj | Changes color of rendered text |
| countdown | bool | Show time countdown of next alarm |
| position | int | position on matrix between 1-4 , else disabled |

### Date

A widget that shows the current date on the display

| Property | Type | Description |
|-|-|-|
| color | Obj | Changes color of rendered text |
| showFullDate | bool | Show weekday in the date string, if > 32 -> scrolling text |
| position | int | position on matrix between 1-4 , else disabled |

### Weather

A widget that shows the current weather based on entering a city (optional to implement: cityID, coordinates, or zip code)

| Property | Type | Description |
|-|-|-|
| color | Obj | Changes color of rendered text |
| city | string | City used to display weather information (OWM API) |
| position | int | position on matrix between 1-4 , else disabled |
| . | . | . |
| cityID | string | City id used to display weather information (OWM API) |
| coordinates | string | Coordinate vlaues used to display weather information (OWM API) |

### Text 

A widget for displaying user-defined text on the display

| Property | Type | Description |
|-|-|-|
| color | Obj | Changes color of rendered text |
| text | string | Text that will render on the display if > 32 -> scrolling text |
| position | int | position on matrix between 1-4 , else disabled |

### Flash Display

A configuration (if enabled) that will flash the display when an alarm goes off.

| Property | Type | Description |
|-|-|-|
| colorValues | arr[] | Used to know flash color sequence (user defined) |

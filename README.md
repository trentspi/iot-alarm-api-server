# iotAlarmClock

## Master Collection

```
{
  format24: Boolean,
  Time:
  {
    color: String,
    position: Number
  },
  Countdown:
  {
    color: String,
    position: Number
  },
  Date: {
    color: String,
    position: Number,
    showDay: Boolean
  },
  Weather:
  {
    color: String,
    city: String,
    position: Number
  },
  Text:
  {
    color: String,
    text: String,
    position: Number
  }
}
```


## Widgets / Configuration

| Property | Type | Description |
|-|-|-|
| format24 | bool | Use 24 hour time instead of 12 |


### Time

A widget for showing the current time on the display.

| Property | Type | Description |
|-|-|-|
| color | string | Changes color of rendered text |
| position | int | position on matrix, if -1 -> disabled |

### Alarm Time

A widget for setting an alarm (can be repeatable) that shows a reminder on the display.

| Property | Type | Description |
|-|-|-|
| name | sting | Title/descriptor of the alarm |
| color | string | Changes color of rendered text |
| hour | int | Hour value of stored alarm (using 24 hour model) |
| min | int | Minute value of stored alarm |
| days | string | Comma seperated 1's or 0's per weekday, used for repeating alarms |
| position | int | position on matrix, if -1 -> disabled |

### Alarm Countdown

A widget that shows how much time until alarm goes off, eg -- Alarm 3 will go off in 3 hours and 15 minutes.

(Consider allowing user to pick which alarm they want to show on the display)

| Property | Type | Description |
|-|-|-|
| color | string | Changes color of rendered text |
| position | int | position on matrix, if -1 -> disabled |

### Date

A widget that shows the current date on the display

| Property | Type | Description |
|-|-|-|
| color | string | Changes color of rendered text |
| showDay | bool | Show weekday in the date string, if > 32 -> scrolling text |
| position | int | position on matrix, if -1 -> disabled |

### Weather

A widget that shows the current weather based on entering a city (optional to implement: cityID, coordinates, or zip code)

| Property | Type | Description |
|-|-|-|
| color | string | Changes color of rendered text |
| city | string | City used to display weather information (OWM API) |
| position | int | position on matrix, if -1 -> disabled |
| . | . | . |
| cityID | string | City id used to display weather information (OWM API) |
| coordinates | string | Coordinate vlaues used to display weather information (OWM API) |

### Text 

A widget for displaying user-defined text on the display

| Property | Type | Description |
|-|-|-|
| color | string | Changes color of rendered text |
| text | string | Text that will render on the display if > 32 -> scrolling text |
| position | int | position on matrix, if -1 -> disabled |

### Flash Display

A configuration (if enabled) that will flash the display when an alarm goes off.

| Property | Type | Description |
|-|-|-|
| colorValues | arr[] | Used to know flash color sequence (user defined) |



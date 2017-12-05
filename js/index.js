var timerID = setInterval(function() {
  /* get date data */
  now = new Date();
  timezone = now.getTimezoneOffset();
  day = now.getDay();
  hour = now.getUTCHours();
  min = now.getUTCMinutes();
  sec = now.getUTCSeconds();
  ms = now.getUTCMilliseconds();

  /* set dates for citiies with respect to UTC time */
  displayTime(hour, min, sec, day, "AM", +12, "time-1", "day-1");
  displayTime(hour, min, sec, day, "AM", -4, "time-2", "day-2");
  displayTime(hour, min, sec, day, "AM", +8, "time-3", "day-3");
  displayTime(hour, min, sec, day, "AM", +2, "time-4", "day-4");
  displayTime(hour, min, sec, day, "AM", -7, "time-5", "day-5");
  displayTime(hour, min, sec, day, "AM", -3, "time-6", "day-6");
  displayTime(hour, min, sec, day, "AM", +1, "time-7", "day-7");
  displayTime(hour, min, sec, day, "AM", +8, "time-8", "day-8");
  displayTime(hour, min, sec, day, "AM", +6, "time-9", "day-9");
  displayTime(hour, min, sec, day, "AM", +10, "time-10", "day-10");

}, 1000);

/*
FUNCTION: returns the string day given the int from 0-6 that's given
*/
function displayTime(hour, min, sec, day, meridiem, offset, timeId, dayId) {

  /* adjusts hour and day depending on timezone offset */
  hour = hour + offset;
  if (hour < 0) {
    hour = 24 + hour;
    day--;
  } else if (hour >= 24) {
    hour = hour - 24;
    day++;
  }

  /* sets meridiem */
  if (hour > 12) {
    hour = hour - 12;
    meridiem = "PM";
  }
  if (hour === 0)
    hour = 12;

  /* pads integers with extra 0 for formatting */
  if (hour < 10)
    hour = "0" + hour;
  if (min < 10)
    min = "0" + min;
  if (sec < 10)
    sec = "0" + sec;

  /* changes displayed time */
  document.getElementById(timeId).innerHTML = hour + ":" + min + ":" + sec + " " + meridiem;

  /* changes displayed day */
  document.getElementById(dayId).innerHTML = getDay(day);
}

/*
FUNCTION: returns the string day given the int from 0-6 that's given
*/
function getDay(day) {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  if (day > 7) { // accounts for sundays when UTC is saturday
    day = day - 7;
  }
  return days[day];
}
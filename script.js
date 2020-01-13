// get current time
var current_date = new Date();
var current_time = current_date.getTime();
var current_hours = current_date.getHours();
var current_minutes = current_date.getMinutes();

// display time
var time_display = document.getElementById("current-time");

time_display.innerHTML = "Current Time: <span style='font-weight: 700'>" + current_hours + ":" + current_minutes + "</span>";

var printer1_availability = document.getElementById("availability-1");
var printer2_availability = document.getElementById("availability-2");


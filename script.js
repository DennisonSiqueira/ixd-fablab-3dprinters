// get current time
var current_date = new Date();
var current_time = current_date.getTime();
var current_hours = current_date.getHours();
var current_minutes = current_date.getMinutes();

// display time
var time_display = document.getElementById("current-time");

// boolean
var availability_1 = true;
var availability_2 = false;
var availability_3 = true;
var availability_4 = true;
var availability_5 = false;
var availability_6 = true;
var availability_7 = false;

//
var printer1_availability = document.getElementById("availability-1");
var printer2_availability = document.getElementById("availability-2");
var printer3_availability = document.getElementById("availability-3");
var printer4_availability = document.getElementById("availability-4");
var printer5_availability = document.getElementById("availability-5");
var printer6_availability = document.getElementById("availability-6");
var printer7_availability = document.getElementById("availability-7");

//
var printer1 = document.getElementById("printer1");
var printer2 = document.getElementById("printer2");
var printer3 = document.getElementById("printer3");
var printer4 = document.getElementById("printer4");
var printer5 = document.getElementById("printer5");
var printer6 = document.getElementById("printer6");
var printer7 = document.getElementById("printer7");

//printer time {
var printer1_time = 0;
var printer2_time = 0;
var printer3_time = 0;
var printer4_time = 0;
var printer5_time = 0;
var printer6_time = 0;
var printer7_time = 0;


// display current time
time_display.innerHTML = "Current Time: <span style='font-weight: 700'>" + current_hours + ":" + current_minutes + "</span>";

// toggle depending on availability

$(document).ready(function () {
    if (availability_1 == false) {
        $("#printer1").addClass("unavailable");
        printer1_availability.innerHTML = "Available at " + printer1_time;
    } else if (availability_1 == true) {
        $("#printer1").removeClass("unavailable");
        printer1_availability.innerHTML = "<strong>Available Now!</strong>";
        printer1.addEventListener("click", function () {
            location.href = "jobs/add";
        });
    }

    if (availability_2 == false) {
        $("#printer2").addClass("unavailable");
        printer2_availability.innerHTML = "Available at " + printer2_time;
    } else if (availability_2 == true) {
        $("#printer2").removeClass("unavailable");
        printer2_availability.innerHTML = "<strong>Available Now!</strong>";
        printer2.addEventListener("click", function () {
            location.href = "jobs/add";
        });
    }

    if (availability_3 == false) {
        $("#printer3").addClass("unavailable");
        printer3_availability.innerHTML = "Available at " + printer3_time;
    } else if (availability_3 == true) {
        $("#printer3").removeClass("unavailable");
        printer3_availability.innerHTML = "<strong>Available Now!</strong>";
        printer3.addEventListener("click", function () {
            location.href = "jobs/add";
        });
    }

    if (availability_4 == false) {
        $("#printer4").addClass("unavailable");
        printer4_availability.innerHTML = "Available at " + printer4_time;
    } else if (availability_4 == true) {
        $("#printer4").removeClass("unavailable");
        printer4_availability.innerHTML = "<strong>Available Now!</strong>";
        printer4.addEventListener("click", function () {
            location.href = "jobs/add";
        });
    }

    if (availability_5 == false) {
        $("#printer5").addClass("unavailable");
        printer5_availability.innerHTML = "Available at " + printer5_time;
    } else if (availability_5 == true) {
        $("#printer5").removeClass("unavailable");
        printer5_availability.innerHTML = "<strong>Available Now!</strong>";
        printer5.addEventListener("click", function () {
            location.href = "jobs/add";
        });
    }

    if (availability_6 == false) {
        $("#printer6").addClass("unavailable");
        printer6_availability.innerHTML = "Available at " + printer6_time;
    } else if (availability_6 == true) {
        $("#printer6").removeClass("unavailable");
        printer6_availability.innerHTML = "<strong>Available Now!</strong>";
        printer6.addEventListener("click", function () {
            location.href = "jobs/add";
        });
    }

    if (availability_7 == false) {
        $("#printer7").addClass("unavailable");
        printer7_availability.innerHTML = "Available at " + printer7_time;
    } else if (availability_7 == true) {
        $("#printer7").removeClass("unavailable");
        printer7_availability.innerHTML = "<strong>Available Now!</strong>";
        printer7.addEventListener("click", function () {
            location.href = "jobs/add";
        });
    }
});

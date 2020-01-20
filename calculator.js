var input_hours = document.getElementById("durationH");
var input_minutes = document.getElementById("durationM");
var total_duration;
var display_duration = document.getElementById("totalDuration");


function calculateDuration() {
    var a = parseInt(input_hours.value * 60);
    var b = parseInt(input_minutes.value);

    total_duration = a + b;
    
    console.log(total_duration);
    
    display_duration.innerHTML = total_duration + " minutes";
   
}

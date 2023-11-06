var clockInterval;
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var clock = document.getElementById("clock");
var date = document.getElementById("date");

var hoursElement = document.getElementById("hr");
var minutesElement = document.getElementById("min");
var secondsElement = document.getElementById("sec");
var apElement = document.getElementById("ap");


startButton.addEventListener("click", startClock);
stopButton.addEventListener("click", stopClock);


function startClock() {
    clockInterval = setInterval(updateClock, 1000);
}


function stopClock() {
    clearInterval(clockInterval);
}


function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, "0");    // For 24 Hours

    var ap = hours < 12 ? "AM" : "PM";
    
    var minutes = now.getMinutes().toString().padStart(2, "0");
    var seconds = now.getSeconds().toString().padEnd(2, "0");
    var currentTime = hours + ":" + minutes + ":" + seconds;

    var day = (now.getDate()).toString().padStart(2, "0");
    var month = (now.getMonth() + 1).toString().padStart(2, "0");
    var year = now.getFullYear();
    var currentDate = day + "/" + month + "/" + year;

    clock.textContent = currentTime;

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    apElement.textContent = ap;

    date.textContent = currentDate;
}

updateClock();

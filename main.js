// Initialize the Variables.
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Set the Graduation date.
const graduationDay = "17 June 2022";

function countdown() {
    const graduationDate = new Date(graduationDay);
    const currentDate = new Date()

    // Get the difference in total seconds.
    const totalSeconds = (graduationDate - currentDate) / 1000;

    // Get the exact values left.
    const months = Math.floor(totalSeconds / 3600 / 24 / 30)
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    // Display the Values.
    monthsEl.innerHTML = months
    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secondsEl.innerHTML = formatTime(seconds)
}

// Format time, basically to add 0 to the time.
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time 
}

// Initial Call of countdown function.
countdown();

// Set interval.
setInterval(countdown, 1000)
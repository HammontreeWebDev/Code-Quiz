// target the timer in the html structure and
// assign it to a variable
var timerEl = document.querySelector("#timer");
// assign start button to variable
var startEl = document.querySelector("#start");
// assign value to be used in the timer
var count = 75;
// Define function to be used to start the timer
// note: timer will not be displayed until user starts the quiz
function countdown() {
    if (count > 0) {
        timerEl.textContent = "Timer: " + count--;
    }
    else {
        clearInterval(countdown);
    }
}
// set interval inside another function to be called
function startTimer() {
     setInterval(countdown, 1000);
}
// add event listener to call the function when button is clicked
startEl.addEventListener("click", startTimer)
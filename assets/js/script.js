// target the timer in the html structure and
// assign it to a variable
var timerEl = document.querySelector("#timer");
// assign start button to variable
var startEl = document.querySelector("#start");
// assign section containers to var
var containerEl = document.getElementsByClassName("container");
// assign value to be used in the timer
var count = 75;
// Placeholder text until function is called
timerEl.textContent = 'Time: (Press "Start Quiz")';
// Define function to be used to start the timer
function countdown() {
    if (count > 1) {
        timerEl.textContent = "Time: " + count-- + " seconds left";
    }
    else if (count === 1) {
        timerEl.textContent = "Time: " + count-- + " second left";
    }
    else {
        clearInterval(countdown);
        timerEl.textContent = "GAME OVER!"
    }
}
// set interval inside another function to be called
function startTimer() {
    setInterval(countdown, 1000);
}
// define display style for container
containerEl[0].style.display = '';
// add function to hide previous container
function hideContainer() {
    containerEl[0].style.display = 'none';
}
// add event listener's:
// Start the timer
startEl.addEventListener("click", startTimer);
// Hide the container
startEl.addEventListener("click", hideContainer);
// Begin working on second section of html where
// we will dynamically create content within the
// id and class placeholders
// First, put into var and set display to none
var questionsEl = document.getElementById("questions");
questionsEl.style.display = 'none';
// next, create a function to show the questions content
function showQuestions() {
    questionsEl.style.display = 'flex';
}
// now, add another event listener that will show the new content
// once the start button is clicked
startEl.addEventListener("click", showQuestions);
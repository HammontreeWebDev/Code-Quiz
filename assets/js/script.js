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
function hideQuestions() {
    questionsEl.style.display = 'none';
}
hideQuestions();
// next, create a function to show the questions content
function showQuestions() {
    questionsEl.style.display = '';
}
// now, add another event listener that will show the new container
// once the start button is clicked
startEl.addEventListener("click", showQuestions);
// now name addtl vars and create a function to show content of question 1
var titleEl = document.getElementById("questionTitle");
var answersEl = document.getElementsByClassName("answers");
var answerOneEl = document.getElementById("answerOne");
var answerTwoEl = document.getElementById("answerTwo");
var answerThreeEl = document.getElementById("answerThree");
var answerFourEl = document.getElementById("answerFour");
var affirm = document.getElementById("affirm");

function questionOne() {
    titleEl.textContent = "Commonly used data types DO NOT include:";
    answerOneEl.textContent = "1. strings";
    answerTwoEl.textContent = "2. booleans";
    answerThreeEl.textContent = "3. alerts";
    answerFourEl.textContent = "4. numbers";
}
// event listener to show content for question one
startEl.addEventListener("click", questionOne);
// add function for affirming correct/incorrect answers
function affirmCorrect() {
    affirm.textContent = "-- Correct! --";
    hideQuestions();
}
function affirmIncorrect() {
    affirm.textContent = "-- Incorrect! --";
    hideQuestions();
}
// add event listeners for right answer vs wrong
answerOneEl.addEventListener("click", affirmIncorrect);
answerTwoEl.addEventListener("click", affirmIncorrect);
answerThreeEl.addEventListener("click", affirmCorrect);
answerFourEl.addEventListener("click", affirmIncorrect);
// create function for question 2
function questionTwo() {
    showQuestions();
    titleEl.textContent = "Arrays in JavaScript can be used to store _____.";
    answerOneEl.textContent = "1. numbers and strings";
    answerTwoEl.textContent = "2. other arrays!";
    answerThreeEl.textContent = "3. booleans";
    answerFourEl.textContent = "4. all of the above";
}
// add event listeners to prompt next question
answerOneEl.addEventListener("click", questionTwo);
answerTwoEl.addEventListener("click", questionTwo);
answerThreeEl.addEventListener("click", questionTwo);
answerFourEl.addEventListener("click", questionTwo);
// need to fix event listeners.. currently applying to all future questions as well

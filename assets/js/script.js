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
// once the start button is clicked along with the content
startEl.addEventListener("click", showQuestions);

// now name addtl vars and create a function to show content of question 1
var questionEl = document.getElementById("questionTitle");
var answersEl = document.getElementsByClassName("answers");
var affirm = document.getElementById("affirm");
var ans1El = document.getElementById("ans1");
var ans2El = document.getElementById("ans2");
var ans3El = document.getElementById("ans3");
var ans4El = document.getElementById("ans4");

// affirm message to be displayed for right and wrong answers
function correct() {
    affirm.textContent = "-- Correct! --"
}
function incorrect() {
    affirm.textContent = "-- Incorrect! --"
}

// array of questions that will be asked:
const questions = [{
    id: 0,
    question: "Commonly used data types DO NOT include:",
    answer: [{ text: "1. strings", isCorrect: false },
    { text: "2. booleans", isCorrect: false },
    { text: "3. alerts", isCorrect: true },
    { text: "4. numbers", isCorrect: false }]
},
{
    id: 1,
    question: "The condition in an if / else statement is encolsed within _____.",
    answer: [{ text: "1. quotes", isCorrect: false },
    { text: "2. curly brackets", isCorrect: false },
    { text: "3. parentheses", isCorrect: true },
    { text: "4. square brackets", isCorrect: false }]
},
{
    id: 2,
    question: "Arrays in JavaScript can be used to store _____.",
    answer: [{ text: "1. numbers and strings", isCorrect: false },
    { text: "2. other arrays", isCorrect: false },
    { text: "3. booleans", isCorrect: false },
    { text: "4. all of the above", isCorrect: true }]
},
{
    id: 3,
    question: "String values must be enclosed within _____ when being assigned to variables",
    answer: [{ text: "1. commas", isCorrect: false },
    { text: "2. curly brackets", isCorrect: false },
    { text: "3. quotes", isCorrect: true },
    { text: "4. parentheses", isCorrect: false }]
},
{
    id: 4,
    question: "A very usefool tool used during development and debugging for printing content to the debugger is:",
    answer: [{ text: "1. JavaScript", isCorrect: false },
    { text: "2. terminal / bash", isCorrect: false },
    { text: "3. for loops", isCorrect: false },
    { text: "4. console.log", isCorrect: true }]
}];

// function to iterate through the questions and options
function iterate(id) {
    // provide the question text
    questionEl.textContent = questions[id].question;

    // provide the answer text
    ans1El.textContent = questions[id].answer[0].text;
    ans2El.textContent = questions[id].answer[1].text;
    ans3El.textContent = questions[id].answer[2].text;
    ans4El.textContent = questions[id].answer[3].text;

    // provide true or false value to answer options
    ans1El.value = questions[id].answer[0].isCorrect;
    ans2El.value = questions[id].answer[1].isCorrect;
    ans3El.value = questions[id].answer[2].isCorrect;
    ans4El.value = questions[id].answer[3].isCorrect;

    // for loop that listens to each button input and continues
    // to call the function, until the last question
    for (var i = 0; i < answersEl.length; i++) {
        answersEl[i].addEventListener("click", () => {
            if (id < 4) {
                id++;
                iterate(id);
            }
        })
    }

}

// declare id var to be used
var id = 0;

// start initial function
startEl.addEventListener("click", iterate(id))
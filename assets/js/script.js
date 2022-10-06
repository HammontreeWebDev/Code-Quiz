// Variable for finished page once quiz  is over
var finishedEl = document.querySelector(".finished");
console.log(finishedEl);
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
    else if (count <= 0) {
        clearInterval(countdown);
        count = 0;
        timerEl.textContent = "Time: " + count + " seconds left";
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
function showContainer() {
    containerEl[0].style.display = '';
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
var quizEl = document.getElementById("quiz");
function hideQuestions() {
    quizEl.style.display = 'none';
}
hideQuestions();

// next, create a function to show the questions content
function showQuestions() {
    quizEl.style.display = '';
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
var userAnswer = "";

// set id to 0 so func can run properly
var id = 0;

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
function quiz() {
    // provide the question text
    questionEl.textContent = questions[id].question;

    // provide the answer text
    ans1El.textContent = questions[id].answer[0].text;
    ans2El.textContent = questions[id].answer[1].text;
    ans3El.textContent = questions[id].answer[2].text;
    ans4El.textContent = questions[id].answer[3].text;

    // store true or false in variable
    var firstAnswerValue = questions[id].answer[0].isCorrect;
    var secondAnswerValue = questions[id].answer[1].isCorrect;
    var thirdAnswerValue = questions[id].answer[2].isCorrect;
    var fourthAnswerValue = questions[id].answer[3].isCorrect;

    // function to evaluate user input and give feedback:

    function evaluate() {
        if (userAnswer == true) {
            affirm.textContent = "-- Correct! --";
            count = count;
        }
        else {
            affirm.textContent = "-- Incorrect! --";
            count = (count - 10);
        }
    }

    // option 1:
    ans1El.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        userAnswer = firstAnswerValue;
        evaluate();
    });

    // option 2:
    ans2El.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        userAnswer = secondAnswerValue;
        evaluate();
    });

    // option 3:
    ans3El.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        userAnswer = thirdAnswerValue;
        evaluate();
    });

    // option 4:
    ans4El.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        userAnswer = fourthAnswerValue;
        evaluate();
    });
};

for (var i = 0; i < answersEl.length; i++) {
    answersEl[i].addEventListener("click", (event) => {
        if (id < 4) {
            id++;
            quiz();
        }
        else {
            clearInterval(countdown);
            allDone();
        }
    })
};

// function to hide questions and show the all done form.
function allDone() {
    finishedEl.style.display = '';
    timerEl.style.display = 'none';
    hideQuestions();
    // add text indicating quiz is finished
    var doneTitle = document.createElement('h1');
    doneTitle.classList = "title";
    doneTitle.textContent = "All Done!";
    finishedEl.append(doneTitle);
    // add text indicating final score
    var scoreMessage = document.createElement('p');
    scoreMessage.textContent = "Your final score is " + count + "!";
    scoreMessage.classList = "text-left";
    finishedEl.append(scoreMessage);
    // Text box with form and submit button
    var initialsEl = document.createElement('p');
    initialsEl.textContent = "Enter Initials: ";
    initialsEl.classList = "text-left";
    finishedEl.append(initialsEl);
    var inputBox = document.createElement('input');
    inputBox.type = "text";
    inputBox.classList = "text-left";
    inputBox.id = "input";
    inputBox.placeholder = "Type In Here!";
    initialsEl.append(inputBox);
    var submitBtn = document.createElement('button');
    submitBtn.textContent = "Submit";
    submitBtn.id = "submit";
    initialsEl.append(submitBtn);

    submitBtn.addEventListener("click", highScores);
}

function hideAffirmMsg() {
    affirm.style.display = "none";
}
function hideFinishedMsg() {
    finishedEl.style.display = "none";
}
function showAffirmMsg(){
    affirm.style.display = "";
}
function showFinishedMsg(){
    finishedEl.style.display = "";
}
function showHighScores(){
    highScoresPageEl.style.display = "";
}
function hideHighScores(){
    highScoresPageEl.style.display = "none";
}

var highScoresPageEl = document.querySelector(".high-scores-page")

// function that displays highscores page
function highScores() {
    hideAffirmMsg();
    hideFinishedMsg();
    showHighScores();

    // Introduction to High Scores Page
    var highScoreTitle = document.createElement('h1');
    highScoreTitle.classList = "title";
    highScoreTitle.textContent = "Highscores";
    highScoresPageEl.append(highScoreTitle);

    // create ol that will dynamically pull information from local storage
    var highScoreList = document.createElement('ol');
    highScoreList.classList = "players-list";
    highScoresPageEl.append(highScoreList);

    var userInformation = document.createElement('li');
    userInformation.classList = "user-info";
    userInformation.textContent = "PlaceHolder-Text";
    highScoreList.appendChild(userInformation);

    var backBtn = document.createElement('button');
    backBtn.classList = "btn";
    backBtn.textContent = "Go Back";
    highScoreList.append(backBtn);
    backBtn.addEventListener("click", hideHighScores);
    backBtn.addEventListener("click", showContainer);
}

// Start Quiz on button click
startEl.addEventListener("click", quiz);

// count is stacking the penalty.. 10 secs.. then 20.. then 30... etc
// need debug
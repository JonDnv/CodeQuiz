//Question & Answer Object
var quizQuestions = {
  questions: [
    "What term do you use to declare a variable?",
    "What does 2 + 2 equal?",
    'What does "2" + "2" - "2" equal?',
    "What character opens an array?",
    "What character closes an object?",
    "An array allows you to store multiple values in a single variable?",
    "array.length provides a number equal to:",
    "JavaScript can be embedded in the html file or in it's own file?",
    "What does JSON stand for?",
    "When was JavaScript created?",
    'What is the proper syntax of a "for" loop?',
    "What is the difference between do while and while loops?",
    "Inside what HTML element is JavaScript put?",
    "What is the correct place to insert JavaScript?",
    'How do you write "Hello World" in an alert box?',
  ],
  choices: [
    ["var", "variable", "param", "varchar"],
    ["4", "22", "44", "undefined"],
    ["20", "2", "222", "4"],
    ["[", "{", "(", "A"],
    ["}", "]", ")", "?"],
    ["True", "False"],
    [
      "The total number of objects in the array",
      "The final index number of the array",
      "NaN",
      "The last entry in a array",
    ],
    ["True", "False"],
    [
      "JavaScript Object Notation",
      "JavaScript Oriented Notation",
      "Jumbo Shift Object Notion",
      "Jumbotron Score On Notation",
    ],
    ["1995", "2005", "2015", "2020"],
    [
      "for (var i = 0; i < arr.length; i++)",
      "for (var i = 1; i < arr.length; i++)",
      "for i = 0; i++; i < arr.length",
      "for (var i = 0; i > arr.length; i--)",
    ],
    [
      "A do while loop executes the script block once before entering the while loop",
      "A do while look executes the script block at the same time as the while clause",
      "A while loop executes after a script block is run",
      "There is no difference",
    ],
    ["html", "javascript", "script", "js"],
    [
      "The <head> section",
      "The <body> section",
      "Both the <head> and the <body> section",
    ],
    [
      'alert("Hello World")',
      'msg("Hello World")',
      'alertbox("Hello World")',
      'msgbox("Hello World")',
    ],
  ],
  correctAnswer: [
    "var",
    "4",
    "20",
    "[",
    "}",
    "True",
    "The total number of objects in the array",
    "True",
    "JavaScript Object Notation",
    "1995",
    "for (var i = 0; i < arr.length; i++)",
    "A do while loop executes the script block once before entering the while loop",
    "script",
    "The <body> section",
    'alert("Hello World")',
  ],
};

//Variable Declaration
//Random Question Index
var qIndex = [];
//Random Answer Index
var aIndex = [];
//Start Time
var testDuration = 180;
// Declares Question Element Variable
var qEl = document.querySelector(".question");
// Declares Answer List Element Variable
var choiceList = document.querySelector("#answers");
// Declares Timer Element Variable
var timeEl = document.querySelector(".timer");

// Unique Random Array Number Generator
//https://stackoverflow.com/questions/8378870/generating-unique-random-numbers-integers-between-0-and-x
function uniqueRandoms(qty, min, max) {
  var rnd,
    arr = [];
  do {
    do {
      rnd = Math.floor(Math.random() * max) + min;
    } while (arr.includes(rnd));
    arr.push(rnd);
  } while (arr.length < qty);
  return arr;
}

// Populates the Random Question Index Array
qIndex = uniqueRandoms(
  quizQuestions.questions.length,
  0,
  quizQuestions.questions.length
);

// Ask Random Question
function askQuestion() {
  // qEl.textContent = quizQuestions.questions[qIndex[0]];
  var questionDiv = $("<p>");
  questionDiv.text = quizQuestions.questions[qIndex[0]];
  $("#question-container").append(questionDiv);
  $("#questionDiv").attr("id","question");

  console.log(questionDiv)
  console.log(questionDiv.text)
  console.log($("#question-container"))
}

// Removes Index Number from qIndex so Questions don't get asked again.
function removeQuestion() {
  qIndex.splice(0, 1);
}

function randomAnswerIndex() {
  aIndex = uniqueRandoms(
    quizQuestions.choices[qIndex[0]].length,
    0,
    quizQuestions.choices[qIndex[0]].length
  );
}

function provideChoices() {
  for (i = 0; i < quizQuestions.choices[qIndex[0]].length; i++) {
    quizQuestions.choices[qIndex[0]][aIndex[i]];
  }
}

function answerList() {
  choiceList.innerHTML = "";

  for (i = 0; i < quizQuestions.choices[qIndex[0]].length; i++) {
    var li = document.createElement("li");
    var btn = document.createElement("button")
    li.textContent = quizQuestions.choices[qIndex[0]][aIndex[i]];
    choiceList.appendChild(btn).appendChild(li);
  }
}

// Counts Down Timer
function testCountdown() {
  var timerInterval = setInterval(function () {
    testDuration--;
    timeEl.textContent = testDuration + " Seconds Left";

    if (testDuration === 0) {
      clearInterval(timerInterval);
      testOver();
    }
  }, 1000);
}

// Provides Feedback When Test is Over
function testOver() {
  if (qIndex.length === 0 || testDuration === 0) {
  }
}

testCountdown();
askQuestion();
// randomAnswerIndex();
// answerList();

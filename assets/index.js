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
      "for (var i = 0; i &lt; arr.length; i++)",
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
      "The head section",
      "The body section",
      "Both the head and the body section",
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
    "for (var i = 0; i &lt; arr.length; i++)",
    "A do while loop executes the script block once before entering the while loop",
    "script",
    "The body section",
    'alert("Hello World")',
  ],
};

//Variable Declaration
//Random Question Index
var qIndex = [];
//Random Answer Index
var aIndex = [];
//Start Time
var testDuration = 120;
//Score Variable
var score = 0;
// Declares Timer Element Variable
var timeEl = document.querySelector(".timer");
// Declares Score Element Variable
var scoreEl = document.querySelector(".score");
// Declares variable to determine if questions were answered before timer was up
var qOrT = false;

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
qIndex =
  uniqueRandoms(
    quizQuestions.questions.length,
    0,
    quizQuestions.questions.length
  );

// Ask Random Question
function askQuestion() {
  if (qIndex.length > 0) {
    var questionDiv = $("#question-container");
    questionDiv.append('<p id="question">' + quizQuestions.questions[qIndex[0]] + '</p>')
  } else {
    outOfQuestions();
  }
}

//Function for action when out of questions
function outOfQuestions() {
  qOrT = true;
  testDuration = 0;
  timeEl.textContent = "";
  $("#answer-buttons").html('<li><button type="button" class="btn btn-dark" id="completedButton">You\'ve Completed The Test!</button></li>');
  setTimeout(function () {
    $("#answer-buttons").html("");
  }, 2500
  );
}

// Removed Question from Screen
function deleteQuestion() {
  $("#question").replaceWith("");
}

// Removes Index Number from qIndex so Questions don't get asked again.
function removeQuestion() {
  qIndex.splice(0, 1);
}

// Function orders answer choices randomly
function randomAnswerIndex() {
  if (qIndex.length > 0) {
    aIndex = uniqueRandoms(
      quizQuestions.choices[qIndex[0]].length,
      0,
      quizQuestions.choices[qIndex[0]].length
    );
  }
}

// Function displays question choices
function provideChoices() {
  if (qIndex.length > 0) {
    for (var i = 0; i < quizQuestions.choices[qIndex[0]].length; i++) {
      var choiceDiv = '<li><button type="button" class="btn btn-dark" id="answerChoices">'
      choiceDiv = choiceDiv + quizQuestions.choices[qIndex[0]][aIndex[i]];
      $("#answer-buttons").append(choiceDiv);
    }
  }
}

// Deletes answers from Screen
function deleteAnswers() {
  if (qIndex.length > 0) {
    for (var i = 0; i < quizQuestions.choices[qIndex[0]].length; i++) {
      $("#answerChoices").replaceWith("");
      $("#correct-answer").replaceWith("");
      $("#wrong-answer").replaceWith("");
    }
  }
}

// Counts Down Timer
function testCountdown() {
  timeEl.textContent = testDuration + " Seconds Left";
  var timerInterval = setInterval(function () {
    testDuration--;
    timeEl.textContent = testDuration + " Seconds Left";
    if (testDuration < 1) {
      timeEl.textContent = "";
      clearInterval(timerInterval);
      outOfTime();
    }
  }, 1000);
}

// Displays Player Score
function scoreDisplay() {
  scoreEl.textContent = "Score: " + score;
  var scoreInterval = setInterval(function () {
    scoreEl.textContent = "Score: " + score;
    if (qIndex.length === 0 || testDuration < 1) {
      scoreEl.textContent = "";
      clearInterval(scoreInterval);
    }
  }, 500);
}

// Alerts Times Up
function outOfTime() {
  deleteQuestion();
  deleteAnswers();
  removeQuestion();
  setTimeout(function () {
    timesUpButton();
  }, 200
  )
}

// Creates Time's Up Button
function timesUpButton() {
  if (qOrT === false) {
    testDuration = 0
    $("#answer-buttons").html('<li><button type="button" class="btn btn-dark" id="timesUpButton">Time\'s Up!</button></li>');
    setTimeout(function () {
      $("#answer-buttons").html("");
    }, 2500
    );
  }
}

// Hides Start Button After Click
function hide() {
  var hide = document.getElementById("startEndButton");
  hide.style.display = "none";
}

//Function Creates Button that Displays Final Score & Prompts User for Initials
function finalScore() {
  alert(score);
}

// Starts Quiz
$("#startEndButton").on("click", "#startButton", function () {
  hide();
  testCountdown();
  scoreDisplay();
  askQuestion();
  randomAnswerIndex();
  provideChoices();
})

// Answers Question & Moves On to Next Question
$("#answer-buttons").on("click", "#answerChoices", function () {
  var buttonText = $(this).html();
  console.log(buttonText)
  console.log(quizQuestions.correctAnswer[qIndex[0]])
  if (buttonText === quizQuestions.correctAnswer[qIndex[0]]) {
    $(this).attr("id", "correct-answer");
    score++
  }
  else {
    $(this).attr("id", "wrong-answer");
    testDuration = testDuration - 10;
  }

  if (qIndex.length > 0 && testDuration > 0) {
    setTimeout(function () {
      deleteQuestion();
      deleteAnswers();
      removeQuestion();
      askQuestion();
      randomAnswerIndex();
      provideChoices();
    }, 500
    );
  }
}
)
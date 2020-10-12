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

//https://stackoverflow.com/questions/8378870/generating-unique-random-numbers-integers-between-0-and-x
var qIndex = [];

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

qIndex = uniqueRandoms(
  quizQuestions.questions.length,
  0,
  quizQuestions.questions.length
);



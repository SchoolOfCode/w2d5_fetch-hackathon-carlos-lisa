/*
Aim: Test your computer knowledge

Show question in h2 tag. ✅ 
Show a score at the bottom, difficulty level
Show what question you're on, out of 10. 

Create four large buttons and show the multiple choice answers ✅ 
Click on answer button, if right answer - highlight button in green.
If wrong - the button goes red, show the right answer afterwards with the right button in green

Next button - when clicked, show the next question 

Each round consists of 10 questions, afterwards show them their results. 
Ask - Do you want to play the next round, if you're good that is - if u get a minimum of 8 correct, you can play intermediate, if u get a minimum of 8 correct

Bonus features
Username
Audio - congratulations
Set Timout at - story, world is back in the Middle Ages, technology has been lost, and help move Earth forward. sci - fi take.  

Step 1

Create html page with the elements: ✅ 
h1 tag - Title of the game ✅ 
h2 tag - Question ✅ 
4 buttons - to show possible answers ✅ 
Button - display Next to show next question ✅ 
P tag to show the score ✅ 
P tag to show difficulty level ✅ 
P tag t0 show question/10 - status ✅ 

Step 2

Get the data from the API to manipulate ✅ 
Create async function ✅ 
Fetch the API with the right endpoint ✅ 
Store response data in a global variable called triviaData ✅ 

Step 3 - Get the question to appear in the h2 tag ✅ 
Declare a function updateQuestion ✅ 
Select the h2 tag with id question ✅ 
Update h2 innerText with the response object question property. ✅ 

Step 4 - Place all of the answers in the buttons

Declare a function ✅ 
Select all of the buttons under the same class name ✅ 
New array made up of one array of incorrect answers and one text for correct answer, ✅ 
Place all answers in each button - for loop ✅ 

Step 5 - Implement check of right and wrong answer
Declare global variable to track the user score ✅
Select the parent of the button with id #answerBox ✅ 
Create a function that check the selected answer agains the right answer ✅ 
Add event listener to the parent of the button ✅ 
If statement to check the correct answer ✅ 
Select p tag with id #answer-result ✅
Update p tag to display Right or Wrong depending on their answer ✅

Step 6
Create a function to update all the following: 
Update the score counter if the question was correct. ✅
Update difficulty level ✅
Update question number ✅

Step 7 - Next
Declare global variable to track the current question ✅ 
Create a function for the next button to:
increment currentQuestion variable ✅
Update question and possible answers ✅
If last question, ask them if they want to play the next round. ✅
Select the next button ✅
Add Event listener to it and the function as 2nd parameter. ✅

*/

// Global variables
let triviaData;
let correctAnswer;
let currentQuestion = 0;
let userScore = 0;

async function triviaApi() {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
  );
  // check response status
  if (response.status === 200) {
    triviaData = await response.json();
    updateQuestion();
    placeAnswers();
  } else {
    triviaData = "Fetch failed";
  }
}

triviaApi();

//Task 3

function updateQuestion() {
  let h2 = document.querySelector("#question");
  console.log(h2);
  h2.innerText = triviaData.results[currentQuestion].question;
}

//Task 4

function placeAnswers() {
  let buttons = document.querySelectorAll(".answer");
  let answersArray = triviaData.results[currentQuestion].incorrect_answers;
  answersArray.push(triviaData.results[currentQuestion].correct_answer);
  answersArray.sort();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = answersArray[i];
  }
}

// Task 5
let answerBox = document.querySelector("#answerBox");

function checkAnswer(event) {
  let answerResult = document.querySelector("#answer-result");
  let score = document.querySelector("#score");
  if (
    event.target.innerText ===
    triviaData.results[currentQuestion].correct_answer
  ) {
    userScore++;
    score.innerText = userScore;
    answerResult.innerText = "RIGHT ANSWER";
  } else {
    answerResult.innerText = "WRONG ANSWER";
  }
}

answerBox.addEventListener("click", checkAnswer);

function updateStatus() {
  let difficulty = document.querySelector("#difficulty");
  let questionNumber = document.querySelector("#questionNumber");
  difficulty.innerText = triviaData.results[0].difficulty;
  questionNumber.innerText = currentQuestion + 1;
}

//Step 7

let nextQuestion = document.querySelector("#next-question");

function getNextQuestion() {
  currentQuestion++;
  if (currentQuestion >= 10) {
    console.log("Do you want to carry on playing");
  } else {
    updateQuestion();
    placeAnswers();
    updateStatus();
  }
}

nextQuestion.addEventListener("click", getNextQuestion);
/*
{
  "response_code": 0,
  "results": [
  {
  "category": "Science: Computers",
  "type": "multiple",
  "difficulty": "easy",
  "question": "When Gmail first launched, how much storage did it provide for your email?",
  "correct_answer": "1GB",
  "incorrect_answers": [
  "512MB",
  "5GB",
  "Unlimited"
  ]
  },
  {
  "category": "Science: Computers",
  "type": "multiple",
  "difficulty": "easy",
  "question": "The programming language &#039;Swift&#039; was created to replace what other programming language?",
  "correct_answer": "Objective-C",
  "incorrect_answers": [
  "C#",
  "Ruby",
  "C++"
  ]
  },
  {
*/

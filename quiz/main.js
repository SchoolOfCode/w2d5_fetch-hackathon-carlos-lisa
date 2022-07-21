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

Step 8 - Fixes
Stop user from being able to click on a question more than once. ✅
    By using a variable to keep track of when they user gives an answer: boolean? ✅
On question 10 remove the next button ✅
    Remove with CSS ✅

Step 9 - Fixes
Move event listener from the div#answerBox to each button with the answer ✅
Select the buttons with class .answer ✅
User a for loop to addevent listener to each button ✅

Step 10 - CSS

Go to the next round MVP - intermediate, which is medium, followed by hard

Create function nextRound ✅
Store all round 1 first scores in an array ✅
Reset current questions ✅
Reset user score ✅
Call the api function to load the next intermediate round. ✅
Update difficult level ✅
Update score on the page ✅

Bonus features 
Tool kit - Macbook, radar system, telescope
*/

// Global variables
let triviaData;
let correctAnswer;
let currentQuestion = 0;
let userScore = 0;
let questionAnswered = false;
let selectedButton;
let round = 1;
let scoreRecord = [];
let techAnnouncement
let inventory = document.querySelector("#inventory") 
inventory.innerHTML = "🔭 Telescope to see comrades in space"

async function triviaApi(difficulty = "easy") {
  let response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=18&difficulty=${difficulty}&type=multiple`
  );
  // check response status
  if (response.status === 200) {
    triviaData = await response.json();
    updateQuestion();
    placeAnswers();
    updateStatus();
  } else {
    triviaData = "Fetch failed";
  }
}

triviaApi();

//Task 3

function updateQuestion() {
  let h2 = document.querySelector("#question");
  h2.innerText = triviaData.results[currentQuestion].question;
}

//Task 4

function placeAnswers() {
  correctAnswer = triviaData.results[currentQuestion].correct_answer;
  let buttons = document.querySelectorAll(".answer");
  let answersArray = triviaData.results[currentQuestion].incorrect_answers;
  answersArray.push(correctAnswer);
  answersArray.sort();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = answersArray[i];
  }
}

// Task 5
//exists everywhere
let answerButtons = document.querySelectorAll(".answer");

function checkAnswer(event) {
  if (questionAnswered === false) {
    selectedButton = event.target;
    let answerResult = document.querySelector("#answer-result");
    let score = document.querySelector("#score");
    questionAnswered = true;
    if (selectedButton.innerText === correctAnswer) {
      userScore++;
      score.innerText = userScore;
      answerResult.innerText = "RIGHT ANSWER";
      //classList = all classes applied to the element.
      selectedButton.classList.toggle("correct");
    } else {
      answerResult.innerText = "WRONG ANSWER";
      selectedButton.classList.toggle("wrong");
    }
  }
}

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", checkAnswer);
}

function updateStatus() {
  let difficulty = document.querySelector("#difficulty");
  let questionNumber = document.querySelector("#questionNumber");
  difficulty.innerText = triviaData.results[currentQuestion].difficulty;
  questionNumber.innerText = currentQuestion + 1;
}

//Step 7

function getNextQuestion() {
  //reset the content and remove classes
  document.querySelector("#answer-result").innerText = "";
  selectedButton.classList.remove("wrong");
  selectedButton.classList.remove("correct");
  currentQuestion++;
  if (currentQuestion >= 10) {
    nextRound();
  } else {
    questionAnswered = false;
    updateQuestion();
    placeAnswers();
  }
  updateStatus();
}

//select the button
let nextQuestion = document.querySelector("#next-question");
nextQuestion.addEventListener("click", getNextQuestion);

let difficultyLevels = ["easy", "medium", "hard"];

function nextRound() {
  techInventory()
  scoreRecord.push({ round: round, score: userScore });
  round++;
  currentQuestion = 0;
  userScore = 0;
  score.innerText = 0;
  questionAnswered = false;
  triviaApi(difficultyLevels[round - 1]);
}

function techInventory() {
  if (userScore >=7 && round == 1) {
    techAnnouncement = "<p>Well done, you have won a laptop to help you with your quest</p>"
    inventory.innerHTML += "<br>💻 Code functions to automate tasks</br>"
  }
  elsif (userScore >=7 && round == 2) {
    techAnnouncement = "<p>Well done, you have coded a 3D spacecraft doughnut to import fellow developers down to help</p>"
  }
}

/*Create function to populate tech inventory 
//to be called with next round fn
//select the p tag and replace it
*/


/*

Create function nextRound
Store all round 1 first scores in an array
Reset current questions 
Reset user score
Call the api function to load the next intermediate round.

/*


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

/*
Aim: Test your computer knowledge

Show question in h2 tag. 
Show a score at the bottom, difficulty level
Show what question you're on, out of 10. 

Create four large buttons and show the multiple choice answers 
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

Step 3 - Get the question to appear in the h2 tag
Declare a function updateQuestion
Select the h2 tag with id question
Update h2 innerText with the response object question property.
*/

// Global variables
let triviaData;

async function triviaApi() {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
  );
  // check response status
  if (response.status === 200) {
    triviaData = await response.json();
    updateQuestion();
  } else {
    triviaData = "Fetch failed";
  }
}

triviaApi();

//Task 3

function updateQuestion() {
  let h2 = document.querySelector("#question");
  console.log(h2);
  h2.innerText = triviaData.results[0].question;
}

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

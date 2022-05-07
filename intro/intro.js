/*

Step 1
Background image  ✅ 
H2 heading ✅ 
Create a box at the middle and bottom. ✅ 
Select the box to show the intro text. ✅ 
Background of School of Code or what we're trained to be ✅ 
Save intro text as line variables ✅ 
With a for loop, create html and fill in the inntertext. ✅ 


Step 2
Button do they want to enter and play, with an audio sound. ✅ 
Select button. ✅ 
Add event listener to the button and go to the next round.  ✅ 
Make it responsive.

Issues

Height - too high. 
Two css or put it into one?
put images and audio in own files?

Step 3
Gifts if they get through to the next round, 
Create a tool inventory
Binoculars - to look for fellow School of Code 
macbook so they can continue programming, and help you on your tech journey

Additional steps
add media queries - CSS 
background fixed 
separate astronaut from the image. 

Step 1

*/

let textBox = document.querySelector("#text-box");
let line1 = "Welcome to Tech Avengers";
let line2 =
  "Planet Earth has suffered damage due to human greed and destruction";
let line3 = "School of Code has sent you to help planet Earth recover";
let line4 = "By recovering tech knowledge, you can rebuild Earth";
let line5 = "Each round consists of 10 tech questions";
let line6 = "If you do well, you can advance to a more difficult level";
let line7 = "You can win tech tools after each round";
let line8 = "Enter to play the game";

let storyLines = [line1, line2, line3, line4, line5, line6, line7, line8];

//this did not work
// function story() {
//   for (let i = 0; i < storyLines.length; i++) {
//     let p = document.createElement("p");
//     setTimeout(() => {
//       p.innerText = storyLines[i];
//     }, 1000);
//     textBox.appendChild(p);
//   }
// }

function story() {
  for (let i = 0; i < storyLines.length; i++) {
    let p = document.createElement("p");
    p.innerText = storyLines[i];
    textBox.appendChild(p);
  }
}

story();

//Task 2
//Add event listener to button

let button = document.querySelector("#enter");
button.addEventListener("click", function () {
  let audio = new Audio("audioFiles/key_alert1.mp3");
  audio.play();
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 2000);
});

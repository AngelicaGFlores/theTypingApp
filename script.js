const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


// Add leading zero to numbers 9 or below (purely for aesthetics):
let littleTimer = [0, 0, 0];
let pressMe = true;
let resetText= document.querySelector("#test-area").placeholder;
function setTimer(){
  //if got pressed once 
  if (pressMe){
      console.log("Hey Im here");
      pressMe = false;
      console.log(resetText);
    }

}



// Run a standard minute/second/hundredths timer:


// Match the text entered with the provided text on the page:
//second part Notify user of progress
function matchText(testArea, testWrapper) {
  
}

// Start the timer:



// Reset everything:
function resetEverything(){
  console.log("hello it works?");
  testArea. = "hey";
  pressMe = true;
  
  
  //what functions to call to delete the input type and reset the timer?
}


// Event listeners for keyboard input and the reset button:
resetButton.addEventListener("click", resetEverything);
testWrapper.addEventListener("keypress", setTimer);

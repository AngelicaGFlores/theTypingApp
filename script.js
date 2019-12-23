const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

let pressMe = true;
let intervalms, intervals, intervalm;

// Proff Start the timer:
function setTimer() {
  let hundredths = 0;
  let minutes = 0;
  let seconds = 0;

  //this will help for the html
  let seconds_string = "";
  let minutes_string = "";
  let hundreds_string = "";

  function hundr() {
    hundredths++;

    if (hundredths >= 99) {
      hundredths = 0;
    }
    //for the leading zero
    if (hundredths < 10) {
      hundreds_string = "0";
    } else {
      hundreds_string = "";
    }

    document.getElementsByClassName("hundredths")[0].innerHTML =
      hundreds_string + `${hundredths}`;
  }

  //if got pressed once
  // PRoff Add leading zero to numbers 9 or below (purely for aesthetics):
  if (pressMe) {
    intervalms = setInterval(hundr, 10);

    intervals = setInterval(function() {
      seconds++;

      if (seconds >= 60) {
        seconds = 0;
      }
      // leading zero for seconds
      if (seconds < 10) {
        seconds_string = "0";
      } else {
        seconds_string = "";
      }

      document.getElementsByClassName("seconds")[0].innerHTML =
        seconds_string + seconds;
    }, 1000);

    intervalm = setInterval(function() {
      minutes++;

      if (minutes >= 60) {
        minutes = 0;
      }
      
      // leading zero for minutes
      if (minutes < 10) {
        minutes_string = "0";
      } else {
        minutes_string = "";
      }

      document.getElementsByClassName("minutes")[0].innerHTML =
        minutes_string + minutes;
    }, 60000);

    pressMe = false;
  }
}

// PROFF Match the text entered with the provided text on the page:
//second part Notify user of progress
function matchText() {
  let userInput = testArea.value;
  let quote = originText.substring(0, userInput.length);
  console.log(quote);

  // as long as the user is typing
  if (userInput.length > 0) {
    // if the word matches to the quote
    if (userInput === quote) {
      //change border color to green as long as the input matches
      testWrapper.style.borderColor = "#00ff00";

      if (userInput.length == originText.length) {
        //Disable text area when complete
        document.getElementById("test-area").disabled = true;

        //Border colorchanges to blue when user types in correct sentence after completion
        testWrapper.style.borderColor = "#0000ff";
        clearInterval(intervals);
        clearInterval(intervalms);
        clearInterval(intervalm);
      }
    } else {
      //Border color changes to red when input is incorrect
      testWrapper.style.borderColor = "#ff0000";
    }
  } else {
    //Sets border to red when textarea is blank and user began typing
    testWrapper.style.borderColor = "#ff0000";
  }
}

// Reset everything:
function resetEverything() {
  //Re-enable text
  document.getElementById("test-area").disabled = false;

  clearInterval(intervals);
  document.getElementsByClassName("seconds")[0].innerHTML = "00";
  clearInterval(intervalms);
  document.getElementsByClassName("hundredths")[0].innerHTML = "00";
  clearInterval(intervalm);
  document.getElementsByClassName("minutes")[0].innerHTML = "00";
  testArea.value = "";
  testArea.placeholder = "The clock starts when you start typing.";
  pressMe = true;
  testWrapper.style.borderColor = "grey";
} //end of reset function

// PROFF Event listeners for keyboard input and the reset button:

testWrapper.addEventListener("keypress", setTimer);
testWrapper.addEventListener("keyup", matchText);
resetButton.addEventListener("click", resetEverything);

//  storing the list of guesses
let guesses = [];
//storing the correct random number
let correctnumber = getRandomNumber();
console.log(correctnumber);

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};

//  Functionality for playing the whole game

function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  displayresult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

//  Show the result for if the guess it too high, too low, or correct

function displayresult(numberGuess) {
  if (correctnumber - numberGuess >= 10) {
    showNumberBelow();
  } else if (correctnumber - numberGuess <= -10) {
    showNumberAbove();
  } else if (
    correctnumber - numberGuess >= 5 &&
    correctnumber - numberGuess < 10
  ) {
    showNumberSomeClose();
  } else if (
    correctnumber - numberGuess <= -5 &&
    correctnumber - numberGuess > -10
  ) {
    showNumberSomeClose();
  } else if (
    correctnumber - numberGuess <= -1 &&
    correctnumber - numberGuess > -5
  ) {
    showNumberVeryClose();
  } else if (
    correctnumber - numberGuess >= 1 &&
    correctnumber - numberGuess < 5
  ) {
    showNumberVeryClose();
  } else {
    showYouWon();
  }
}

//  Initializing a new game by resetting all values

function initGame() {
  //Reset everything like correctNumber,result display,guesses array,reset the history view
  correctnumber = getRandomNumber();
  document.getElementById("result").innerHTML = " ";
  guesses = [];
  displayHistory(); //because guesses are empty now
  document.getElementById("number-guess").innerHTML = "What's your guess?";
}

//  Generating a random number between 1 and 100

function getRandomNumber() {
  let randomnumber = Math.floor(Math.random() * 100) + 1;

  return randomnumber;
}

//  Save guess history by appendding the gusses to a array

function saveGuessHistory(guess) {
  guesses.push(guess);
}

//  Displayint the guess history

function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";

  while (index >= 0) {
    list +=
      "<li class='list-group-item'>" +
      "You guessed " +
      guesses[index] +
      "</li>";
    index--;
  }
  list += "</ul>";

  document.getElementById("history").innerHTML = list;
}

//  Showing if the guess is wrong or correct

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  //  Get the dialog using the getDialog() function and save it to variable called dialog to output it

  let dialog = getDialog("won", text);

  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";

  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";

  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberSomeClose() {
  const text = "Cool Just Got some closer!!!";

  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberVeryClose() {
  const text = "Cool Just Got very close!!";

  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

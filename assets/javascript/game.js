// VAR 

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userChoice = [];
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var yourGuessesText = document.getElementById("yourGuesses-text");


//FUNC

document.onkeypress = function(event) {

   var userGuess = event.key;
   var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

   if (userGuess === computerChoice) {
       wins++;
       guessesLeft = 9;
       userChoice = [];

   } else {
       if (userChoice.includes(userGuess)) {
        } else {
           guessesLeft--;
           userChoice.push(userGuess);
       }
   }
   if (guessesLeft === 0) {
    //    guessesLeft++;
       guessesLeft = 10;
       losses++;
       userChoice = [];
   }
   
   winsText.textContent = "Wins: " + wins;
   lossesText.textContent = "Losses: " + losses;
   guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
   yourGuessesText.textContent = "Your Guesses So Far: " + userChoice;

}
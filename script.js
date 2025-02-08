// Global variables
var resultParagraph = document.getElementById("result");
var random;
var range = 100;
var nextRandom = Math.floor(Math.random() * range + 1);



// Function to generate a random number
function generateRandom() {
    random = nextRandom;
    nextRandom = Math.floor(Math.random() * range + 1);
    console.log(random);
    resultParagraph.innerHTML = random;
}

// Function for the higher button
function higher() {
    if (random < nextRandom) {
        window.alert("You win!");
      }
      else if (random > nextRandom) {
        window.alert("You lose!");
      }
      else {
        window.alert("They are the same!");
      }

  generateRandom() ;
    }

// Function for the lower button
function lower() {
    if (random > nextRandom) {
        window.alert("You Win!");
      }
      else if (random < nextRandom) {
        window.alert("You lose");
      }
      else {
        window.alert("They are the same!");
      }
}

//Generate a number to start the game!
generateRandom();
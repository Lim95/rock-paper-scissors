// variables
var ROCK = 0;
var PAPER = 1;
var SCISSORS = 2;
var LOSE = 0;
var WIN = 1;
var TIE = 2;
var TRUTHTABLE = [
  //ROCK PAPER SCISSORS - COMP
  [TIE, LOSE, WIN], // PLAYER ROCK
  [WIN, TIE, LOSE], // PLAYER PAPER
  [LOSE, WIN, TIE]  // PLAYER SCISSORS
];
// Get references to the #generate element
var generateBtn = document.querySelector("#play");
// Add event listener to generate button
generateBtn.addEventListener("click", playGame);

function rockPaperScissors() {
  return Math.floor(Math.random()*3);
};

function changeImage(player, comp) {
  if (player === ROCK) {
    document.getElementById("player-image-id").src="./assets/images/rock.png";
  }
  else if (player === PAPER) {
    document.getElementById("player-image-id").src="./assets/images/paper.png";
  }
  else {
    document.getElementById("player-image-id").src="./assets/images/scissors.png";
  }
  if (comp === ROCK) {
    document.getElementById("comp-image-id").src="./assets/images/rock.png";
  }
  else if (comp === PAPER) {
    document.getElementById("comp-image-id").src="./assets/images/paper.png";
  }
  else {
    document.getElementById("comp-image-id").src="./assets/images/scissors.png";
  } 
};

function printResult(result) {
  switch(result){
    case WIN:
      document.getElementById("test-text").innerHTML="win";
      break;
    case LOSE:
      document.getElementById("test-text").innerHTML="lose";
      break;
    case TIE:
      document.getElementById("test-text").innerHTML="tie";
      break;
    default:
      break;  
  }
};
// Write password to the #password input
function playGame() {
  var player = rockPaperScissors();
  var comp = rockPaperScissors();
  var result = TRUTHTABLE[player][comp];
  changeImage(player, comp);
  printResult(result);
  console.log(player);
  console.log(comp);
  console.log(result);

};

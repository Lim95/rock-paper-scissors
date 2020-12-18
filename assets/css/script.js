// variables
var ROCK = 0;
var PAPER = 1;
var SCISSORS = 2;
var LOSE = 0;
var WIN = 1;
var TIE = 2;
var bFlag = true;
var TRUTHTABLE = [
  //ROCK PAPER SCISSORS - COMP
  [TIE, LOSE, WIN], // PLAYER ROCK
  [WIN, TIE, LOSE], // PLAYER PAPER
  [LOSE, WIN, TIE]  // PLAYER SCISSORS
];
var playerRecord = {playerWins: 0, playerLosses: 0, playerTies: 0};

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
      document.getElementById("result").innerHTML="YOU WIN";
      document.getElementById("wins").innerHTML=playerRecord.playerWins.toString();
      break;
    case LOSE:
      document.getElementById("result").innerHTML="YOU LOST";
      document.getElementById("losses").innerHTML=playerRecord.playerLosses.toString();
      break;
    case TIE:
      document.getElementById("result").innerHTML="YOU TIED";
      document.getElementById("ties").innerHTML=playerRecord.playerTies.toString();
      break;
    default:
      break;  
  }
};

function saveResults (result){
  switch(result) {
    case WIN:
      playerRecord.playerWins += 1;
      break;
    case LOSE:
      playerRecord.playerLosses += 1;
      break;
    case TIE:
      playerRecord.playerTies += 1;
      break;
    default:
      break;
  }
};


function playGame() {
  var player = rockPaperScissors();
  var comp = rockPaperScissors();
  var result = TRUTHTABLE[player][comp];
  changeImage(player, comp);
  saveResults(result);
  printResult(result);
  console.log(playerRecord.playerLosses);
};

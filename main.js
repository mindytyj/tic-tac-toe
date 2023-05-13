/*----- constants -----*/
const colors = {
  player1: "white",
  player2: "yellow",
  null: "gray",
};

const winningCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

/*----- state variables -----*/
const game = {
  board: [],
  turn: "",
  winner: "",
  message: "",
};

/*----- cached elements  -----*/
const cellOne = document.querySelector("#cell-one");
const cellTwo = document.querySelector("#cell-two");
const cellThree = document.querySelector("#cell-three");
const cellFour = document.querySelector("#cell-four");
const cellFive = document.querySelector("#cell-five");
const cellSix = document.querySelector("#cell-six");
const cellSeven = document.querySelector("#cell-seven");
const cellEight = document.querySelector("#cell-eight");
const cellNine = document.querySelector("cell-nine");

const startGame = document.querySelector("#startGame");
const resetGame = document.querySelector("#resetGame");

const gameMessage = document.querySelector("#gameMessage");

/*----- event listeners (Logic) -----*/
startGame.addEventListener("click", initialise);
resetGame.addEventListener("click", main);

/*----- render functions (No logic) -----*/
function render() {}

/*----- functions -----*/

function initialise() {
  game.board = {
    cellOne: null,
    cellTwo: null,
    cellThree: null,
    cellFour: null,
    cellFive: null,
    cellSix: null,
    cellSeven: null,
    cellEight: null,
    cellNine: null,
  };

  game.turn = "Player 1";

  game.winner = null;

  gameMessage.innerText = `It is ${game.turn}'s turn.`;

  return;
}

function main() {
  render();
}

main();

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
let board = [];
let turn = "";
let winner = "";
let message = "";

/*----- cached elements  -----*/
const gameBoard = document.querySelector(".grid");
const gameCells = document.querySelectorAll(".grid-item");

const resetGame = document.querySelector("#resetGame");

const gameMessage = document.querySelector("#gameMessage");

/*----- event listeners (Logic) -----*/
resetGame.addEventListener("click", main);

/*----- render functions (No logic) -----*/
function render() {
  renderBoard();
  renderMessage();
}

function renderBoard() {
  board.forEach(function (cell, index) {
    const currentCell = document.getElementById(`cell-${index}`);
    currentCell.style.backgroundColor = colors[cell];
  });
}

function renderMessage() {
  gameMessage.innerText = message;
}

/*----- functions -----*/

function initialise() {
  board = [null, null, null, null, null, null, null, null, null];

  turn = "Player X";

  winner = null;

  render();
}

function winnerMessage() {
  if (winner !== null) {
    message = `It is now ${turn.toUpperCase()}'s turn!`;
  }

  if (winner === "T") {
    message = "It's a tie!";
  } else if (winner === "Player X") {
    message = `Congratulations, ${turn.toUpperCase()}! You have won!`;
  } else if (winner === "Player O") {
    message = `Congratulations, ${turn.toUpperCase()}! You have won!`;
  }
  render();
}

function main() {
  initialise();
  render();
}

main();

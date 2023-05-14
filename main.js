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
}

function renderBoard() {
  board.forEach(function (cell, index) {
    const currentCell = document.getElementById(`cell-${index}`);
    currentCell.style.backgroundColor = colors[cell];
  });
}

/*----- functions -----*/

function main() {
  render();
}

main();

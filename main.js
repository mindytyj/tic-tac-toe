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
};

/*----- cached elements  -----*/

/*----- event listeners (Logic) -----*/

/*----- render functions (No logic) -----*/
function render() {}

/*----- functions -----*/
function main() {
  render();
}

main();

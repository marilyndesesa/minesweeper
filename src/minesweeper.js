//create function to print the board correctly
const printBoard = board => {
  console.log(`Current Board:`);
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

//create structure of game board
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];

//displays current board in console
printBoard(board);

//reassign value of nested array
board[0][1] = '1';
board[2][2] = 'B';

//displays updated board in console
printBoard(board);

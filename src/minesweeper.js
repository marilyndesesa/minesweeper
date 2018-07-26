//create the player board
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};



//create bomb board
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    }
    board.push(row);
  }

  //randomly generate bombs
  let numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    //potential to add bombs over existing bombs - will address later
  }
  return board;
};

//logs the board to the consle
const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

//test functions to create both boards
let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,2);

console.log(`Player Board:`);
printBoard(playerBoard);

console.log(`Bomb Board:`);
printBoard(bombBoard);

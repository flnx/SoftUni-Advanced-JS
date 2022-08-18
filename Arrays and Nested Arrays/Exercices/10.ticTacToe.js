function ticTacToe(arr) {
  let playerOne = 'X';
  let playerTwo = 'O';
  let isPlayerOne = true;
  let isPlayerTwo = false;

  let board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  for (let i = 0; i < arr.length; i++) {
    let [x, y] = arr[i].split(' ').map(Number);
    let currentPlayer = null;
    // check if there's any free space on the board
    let boardSpace = board.filter((arr) => arr.some((x) => x === false));
    if (boardSpace.length == 0) {
      break;
    }
    // if the place is already taken, try again
    if (board[x][y] !== false) {
      console.log('This place is already taken. Please choose another!');
      continue;
    }
    // players moves
    if (isPlayerOne) {
      board[x][y] = playerOne;
      currentPlayer = playerOne;
      isPlayerOne = false;
      isPlayerTwo = true;
    } else if (isPlayerTwo) {
      board[x][y] = playerTwo;
      currentPlayer = playerTwo;
      isPlayerOne = true;
      isPlayerTwo = false;
    }
    // check for a winning pattern
    if (winner(currentPlayer)) {
      console.log(`Player ${currentPlayer} wins!`);
      for (let el of board) {
        console.log(el.join('\t'));
      }
      return;
    }
  }
  // no winner :(
  console.log('The game ended! Nobody wins :(');
  for (let el of board) {
    console.log(el.join('\t'));
  }
  // check for winners
  function winner(currentPlayer) {
    for (let row = 0; row < board.length; row++) {
      let horizontalCheck = [];
      let verticalCheck = [];
      let leftDiagonalCheck = [];
      let rightDiagonalCheck = [];

      for (let col = 0; col < board.length; col++) {
        horizontalCheck.push(board[row][col]);
        verticalCheck.push(board[col][row]);
        leftDiagonalCheck.push(board[col][col]);
        rightDiagonalCheck.push(board[col][board.length - 1 - col]);
      }

      let horizontal = validateWinningPattern(horizontalCheck, currentPlayer);
      let vertical = validateWinningPattern(verticalCheck, currentPlayer);
      let leftDiagonal = validateWinningPattern(leftDiagonalCheck, currentPlayer);
      let rightDiagonal = validateWinningPattern(rightDiagonalCheck, currentPlayer);

      if (horizontal || vertical || leftDiagonal || rightDiagonal) return true;
    }
  }
  // check for a winning pattern
  function validateWinningPattern(arr, player) {
    if (player === 'X') {
      player = arr.filter((a) => a === 'X').length;
    } else if (player === 'O') {
      player = arr.filter((a) => a === 'O').length;
    }
    if (player === 3) return true;
  }
}
ticTacToe(['0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0']);

// output

// Player O wins!
// O	  X	   X
// X	  O    X
// O	false	 O

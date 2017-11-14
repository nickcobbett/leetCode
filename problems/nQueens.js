/**
 * @param {number} n
 * @return {string[][]}
 */
class Board {
  constructor(n, row, col) {
    this.matrix = new Array(n).fill([]).map(arr => new Array(n).fill('.'));
    this.rows = {};
    this.cols = {};
    this.queens = [];
    this.nQueens = 1;
    this.firstQueen = [row, col];
    this.size = n;
    this.initialize(n, row, col);
  }

  initialize(n, row, col) {
    for (var i = 0; i < n; i++) {
      this.rows[i.toString()] = 1;
      this.cols[i.toString()] = 1;
    }
    this.matrix[row][col] = 'Q';
    this.queens.push([row, col]);
    delete this.rows[row];
    delete this.cols[col];
  }

  checkDiagonal(row, col) {
    // row = parseInt(row);
    // col = parseInt(col)
    for (var i = 0; i < this.queens.length; i++) {
      // console.log(Math.abs((row - this.queens[i][0]) / (col - this.queens[i][1])))
      if (Math.abs((parseInt(row) - this.queens[i][0]) / (parseInt(col) - this.queens[i][1])) === 1) {
        return false;
      }
    }
    return true;
  }

  placeNextQueen(rw, cl) {
    for (var row in this.rows) {
      for (var col in this.cols) {
        if (this.rows[row] && this.cols[col] && this.checkDiagonal(row, col) && (row !== rw && col !== cl)) { // if
          delete this.rows[row];
          delete this.cols[col];
          row = parseInt(row);
          col = parseInt(col);
          this.matrix[row][col] = 'Q';
          this.queens.push([row, col]);
          this.nQueens++;
          return [row, col];
        }
      }
    }
    return false;
  }

  getNQueens() {
    return this.nQueens;
  }

  getBoard() {
    return this.matrix.map(row => row.join(''));
  }
}

var solveNQueens = function(n) {
  var boards = [];
  var boardsHash = {};
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var numTries = 0;
      var board = new Board(n, i, j);
      var count = 1;
      var queens = board.queens;
      // console.log('###', queens)
      var secondQueen = board.placeNextQueen();
      var lastQueen = board.placeNextQueen();
      queens.push(lastQueen);

      // fill board completely, then reset board and reset last queen (this is likely the problem)
      while (numTries < n * n) {
      console.log(board.queens)
        while (board.placeNextQueen()) {
          board.placeNextQueen();
        }
        count = board.getNQueens();
        if (count === n && !boardsHash[JSON.stringify(board.getBoard())]) {
          boards.push(board.getBoard());
          boardsHash[JSON.stringify(board.getBoard())] = 1;
        }
        board = new Board(n, i, j) // reset board
        secondQueen = board.placeNextQueen(secondQueen[0], secondQueen[1]); // place new second queen
        numTries++;
      }
    }
  }
  // console.log(boards)
  return boards
};

// console.log(solveNQueens(5))


var fiveQueensActual =
[ [ 'Q....', '..Q..', '....Q', '.Q...', '...Q.' ],
  [ 'Q....', '...Q.', '.Q...', '....Q', '..Q..' ],
  [ '.Q...', '...Q.', 'Q....', '..Q..', '....Q' ],
  [ '.Q...', '....Q', '..Q..', 'Q....', '...Q.' ],
  [ '..Q..', 'Q....', '...Q.', '.Q...', '....Q' ],
  [ '...Q.', 'Q....', '..Q..', '....Q', '.Q...' ],
  [ '...Q.', '.Q...', '....Q', '..Q..', 'Q....' ],]

var fiveQueensExpected = [
["Q....","..Q..","....Q",".Q...","...Q."],
["Q....","...Q.",".Q...","....Q","..Q.."],
[".Q...","...Q.","Q....","..Q..","....Q"],
[".Q...","....Q","..Q..","Q....","...Q."],
["..Q..","Q....","...Q.",".Q...","....Q"],
["..Q..","....Q",".Q...","...Q.","Q...."],
["...Q.","Q....","..Q..","....Q",".Q..."],
["...Q.",".Q...","....Q","..Q..","Q...."],
["....Q",".Q...","...Q.","Q....","..Q.."],
["....Q","..Q..","Q....","...Q.",".Q..."]];

var missingBoards =
[ [ '..Q..', '....Q', '.Q...', '...Q.', 'Q....' ],
  [ '....Q', '.Q...', '...Q.', 'Q....', '..Q..' ],
  [ '....Q', '..Q..', 'Q....', '...Q.', '.Q...' ] ];

console.log(JSON.stringify(fiveQueensExpected) === JSON.stringify(solveNQueens(5)))
var expectedfiltered = fiveQueensExpected.filter(board => !JSON.stringify(fiveQueensActual).includes(JSON.stringify(board)))
console.log(expectedfiltered)
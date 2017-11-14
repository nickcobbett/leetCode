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
    for (var i = 0; i < this.queens.length; i++) {
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

  var fillBoard = (board, row, col, visited) => {

    // place queens in a board

    // have a matrix of all cells

    // call this function for each cell. each time you add a queen you add that to the visited and you make that visited cell unavailable the first time it's attempted to be visited
  }

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var board = new Board(n, i, j);
      // console.log(board)
      var secondQueen = board.placeNextQueen();

      var placedQueens = board.queens;
      var lastQueen = board.queens[board.queens.length - 1];
      console.log('lastQueen', lastQueen);
      placedQueens.push(lastQueen);

      // console.log(board.queens)

          while (board.placeNextQueen()) {
            board.placeNextQueen();
          }
          if (board.getNQueens() === n && !boardsHash[JSON.stringify(board.getBoard())]) {
            boards.push(board.getBoard());
            boardsHash[JSON.stringify(board.getBoard())] = 1;
          }
          board = new Board(n, i, j); // reset board
          // board = new Board(n, placedQueens)
          secondQueen = board.placeNextQueen(); // place new second queen secondQueen[0], secondQueen[1]
          // numTries++;
        // }


    }
  }
  console.log(boards)
  return boards
};

// solveNQueens(4)

var fourQueensExpected =
[ [ '.Q..', '...Q', 'Q...', '..Q.' ],
  [ '..Q.', 'Q...', '...Q', '.Q..' ] ];


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


// console.log(fourQueensExpected.every(board => JSON.stringify(solveNQueens(4)).includes(JSON.stringify(board))))
console.log(fiveQueensExpected.every(board => solveNQueens(5).includes(board)))
var fiveNBoardsMissing = fiveQueensExpected.filter(board => !JSON.stringify(fiveQueensActual).includes(JSON.stringify(board)))
console.log(fiveNBoardsMissing)
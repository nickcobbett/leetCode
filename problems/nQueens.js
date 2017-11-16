/**
 * @param {number} n
 * @return {string[][]}
 */
class Board {
  constructor(n, state) {
    this.rows = {};
    this.cols = {};
    this.queens = [];
    // this.queens = {};
    this.size = n;
    this.initialize(n, state);
  }

  initialize(n, state) {
    for (var i = 0; i < n; i++) {
      this.rows[i] = 1;
      this.cols[i] = 1;
    }

    if (state) {
      this.rows = Object.assign({}, state.rows);
      this.cols = Object.assign({}, state.cols);
      this.queens = [...state.queens];
    }
  }

  getState() {
    return {
      rows: this.rows,
      cols: this.cols,
      queens: this.queens
    }
  }

  checkDiagonal(row, col) {
    for (var i = 0; i < this.queens.length; i++) {
      if (Math.abs((row - this.queens[i][0]) / (col - this.queens[i][1])) === 1) {
        return false;
      }
    }
    return true;
  }

  placeNextQueen(tryRow, tryCol) {
    var _placeQueen = (row, col) => {
      delete this.rows[row];
      delete this.cols[col];
      this.queens.push([row, col]);
      return this;
    };

    if ((tryRow !== undefined && tryCol !== undefined) && this.rows[tryRow] && this.cols[tryCol] && this.checkDiagonal(tryRow, tryCol)) {
      return _placeQueen(tryRow, tryCol);
    } else {
      for (var row in this.rows) {
        for (var col in this.cols) {
          if (this.rows[row] && this.cols[col] && this.checkDiagonal(row, col)) {
            return _placeQueen(row, col);
          }
        }
      }
    }
    return false;
  }

  getQueens() {
    this.queens.sort((a, b) => {
      if (a[0] < b[0]) return -1;
      if (a[0] > b[0]) return 1;
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return -1;
      return 0;
    });
    return this.queens;
  }

  hasOpenCells() {
    for (var row in this.rows) {
      if (!Object.prototype.hasOwnProperty.call(this.rows, row)) {
        return false;
      }
    }
    for (var col in this.cols) {
      if (!Object.prototype.hasOwnProperty.call(this.cols, col)) {
        return false;
      }
    }
    for (var row in this.rows) {
      for (var col in this.cols) {
        if (this.checkDiagonal(row, col)) {
          return true;
        }
      }
    }
    return false;
  }
}

var solveNQueens = function(n) {
  var boardsHash = {};
  var memo = {};

  var fillBoard = (board) => {

    if (!board) {
      board = new Board(n);
    }

    if (board.queens.length === n) {
      if (!boardsHash[JSON.stringify(board.getQueens())]) {
        boardsHash[JSON.stringify(board.queens)] = 1;
      }
      return;
    } else if (board.hasOpenCells()) {
      for (var row in board.rows) {
        for (var col in board.cols) {
          if (board.rows[row] && board.cols[col] && board.checkDiagonal(row, col)) {
            var key = `${JSON.stringify(board.getQueens())}-${row}-${col}`;
            if (!memo[key]) {
              memo[key] = 1;
              fillBoard(new Board(n, board.getState()).placeNextQueen(row, col));
            }
          }
        }
      }
    } else {
      return;
    }
  }

  fillBoard();

  // console.log('boardsHash', boardsHash);
  var formatBoards = (queenCoords) => {
    var boards = [];
    for (var queens in queenCoords) {
      queens = JSON.parse(queens);
      var board = new Array(n).fill([]).map(arr => new Array(n).fill('.'));
      queens.forEach(queen => board[queen[0]][queen[1]] = 'Q');
      boards.push(board.map(row => row.join('')));
    }
    return boards;
  }

  return formatBoards(boardsHash);
};

console.log(solveNQueens(6));

      // if (!boardsHash[JSON.stringify(board.getBoard())]) {
      //   boards.push(board.getBoard());
      //   boardsHash[JSON.stringify(board.getBoard())] = 1;
      // }




//board testing
  // var state = {
  //   rows: { '1': 1, '2': 1, '3': 1 },
  //   cols: { '1': 1, '2': 1, '3': 1 },
  //   queens: [ [ '0', '0' ] ],
  //   nQueens: 1,
  // }
  // var board = new Board(n)
  // board.placeNextQueen()
  // var board2 = new Board(n, state)
  // board.placeNextQueen()
  // board.placeNextQueen()
  // board.placeNextQueen()
  // board.placeNextQueen()
  // board.placeNextQueen()
  // console.log(board.hasOpenCells())
  // console.log(board)
  // console.log('###', board2)


    // var memo = {};

    // function f(board, row, col) {
      // var value;
      // var key = JSON.stringify(board.getBoard()) + row.toString() + '-' + col.toString();

      // if (key in memo) {
        // value = memo[key];
      // } else {




// var fourQueensExpected =
// [ [ '.Q..', '...Q', 'Q...', '..Q.' ],
//   [ '..Q.', 'Q...', '...Q', '.Q..' ] ];


// var fiveQueensActual =
// [ [ 'Q....', '..Q..', '....Q', '.Q...', '...Q.' ],
//   [ 'Q....', '...Q.', '.Q...', '....Q', '..Q..' ],
//   [ '.Q...', '...Q.', 'Q....', '..Q..', '....Q' ],
//   [ '.Q...', '....Q', '..Q..', 'Q....', '...Q.' ],
//   [ '..Q..', 'Q....', '...Q.', '.Q...', '....Q' ],
//   [ '...Q.', 'Q....', '..Q..', '....Q', '.Q...' ],
//   [ '...Q.', '.Q...', '....Q', '..Q..', 'Q....' ],]

// var fiveQueensExpected = [
// ["Q....","..Q..","....Q",".Q...","...Q."],
// ["Q....","...Q.",".Q...","....Q","..Q.."],
// [".Q...","...Q.","Q....","..Q..","....Q"],
// [".Q...","....Q","..Q..","Q....","...Q."],
// ["..Q..","Q....","...Q.",".Q...","....Q"],
// ["..Q..","....Q",".Q...","...Q.","Q...."],
// ["...Q.","Q....","..Q..","....Q",".Q..."],
// ["...Q.",".Q...","....Q","..Q..","Q...."],
// ["....Q",".Q...","...Q.","Q....","..Q.."],
// ["....Q","..Q..","Q....","...Q.",".Q..."]];

// var missingBoards =
// [ [ '..Q..', '....Q', '.Q...', '...Q.', 'Q....' ],
//   [ '....Q', '.Q...', '...Q.', 'Q....', '..Q..' ],
//   [ '....Q', '..Q..', 'Q....', '...Q.', '.Q...' ] ];


// console.log(fourQueensExpected.every(board => JSON.stringify(solveNQueens(4)).includes(JSON.stringify(board))))
// solveNQueens(5)
// console.log(fiveQueensExpected.every(board => JSON.stringify(solveNQueens(5)).includes(JSON.stringify(board))))
// var fiveNBoardsMissing = fiveQueensExpected.filter(board => !JSON.stringify(fiveQueensActual).includes(JSON.stringify(board)))
// console.log(fiveNBoardsMissing)
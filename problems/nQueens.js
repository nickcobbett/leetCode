/**
 * @param {number} n
 * @return {string[][]}
 */
class Board {
  constructor(n, state) {
    this.matrix = new Array(n).fill([]).map(arr => new Array(n).fill('.'));
    this.rows = {};
    this.cols = {};
    this.queens = [];
    this.nQueens = 0;
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
      this.nQueens = state.nQueens;

      this.queens.forEach(queen => {
        this.matrix[queen[0]][queen[1]] = 'Q'
      })
    }
  }

  getState() {
    return {
      rows: this.rows,
      cols: this.cols,
      queens: [...this.queens],
      nQueens: this.nQueens
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
    if ((tryRow !== undefined && tryCol !== undefined) && this.rows[tryRow] && this.cols[tryCol] && this.checkDiagonal(tryRow, tryCol)) {
      delete this.rows[tryRow];
      delete this.cols[tryCol];
      this.matrix[tryRow][tryCol] = 'Q';
      this.queens.push([tryRow, tryCol]);
      this.nQueens++;
      return this;
    } else {
      for (var row in this.rows) {
        for (var col in this.cols) {
          if (this.rows[row] && this.cols[col] && this.checkDiagonal(row, col)) { // if
            delete this.rows[row];
            delete this.cols[col];
            this.matrix[row][col] = 'Q';
            this.queens.push([row, col]);
            this.nQueens++;
            return this;
          }
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

  hasOpenCells() {
    for (var row in this.rows) {
      if (!Object.prototype.hasOwnProperty.call(this.rows, row)) {
        console.log('fails rows')
        return false;
      }
    }
    for (var col in this.cols) {
      if (!Object.prototype.hasOwnProperty.call(this.cols, col)) {
        console.log('fails cols')
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
  var boards = [];
  var boardsHash = {};
  var memo = {};

  var fillBoard = (board) => {

    if (!board) {
      board = new Board(n);
    }

    if (board.getNQueens() === n) {
      if (!boardsHash[JSON.stringify(board.getBoard())]) {
        boards.push(board.getBoard());
        boardsHash[JSON.stringify(board.getBoard())] = 1;
      }
      return;
    } else if (board.hasOpenCells()) {
      for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
          var key = `${JSON.stringify(board.getBoard())}-${i}-${j}`;
          if (!memo[key]) {
            fillBoard(new Board(n, board.getState()).placeNextQueen(i, j));
            memo[key] = 1;
          }
        }
      }
    } else {
      return;
    }

  }

  fillBoard();

  console.log('boards: ', boards);
  // console.log('# boards', boards.length);
  return boards;
};

solveNQueens(5);

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




  // var fillBoard = (board, row, col, visited) => {
  //   // place queens in a board
  //   // have a matrix of all cells
  //   // call this function for each cell. each time you add a queen you add that to the visited and you make that visited cell unavailable the first time it's attempted to be visited
  // }
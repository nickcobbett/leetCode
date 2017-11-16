/**
 * @param {number} n
 * @return {string[][]}
 */
class Board {
  constructor(n, state) {
    this.rows = {};
    this.cols = {};
    this.queens = {};
    this.initialize(n, state);
  }

  initialize(n, state) {
    if (state) {
      this.rows = Object.assign({}, state.rows);
      this.cols = Object.assign({}, state.cols);
      this.queens = Object.assign({}, state.queens);
    } else {
      for (var i = 0; i < n; i++) {
        this.rows[i] = 1;
        this.cols[i] = 1;
      }
    }
  }

  getState() {
    return {
      rows: this.rows,
      cols: this.cols,
      queens: this.queens
    };
  }

  checkDiagonal(row, col) {
    for (var queenRow in this.queens) {
      if (Math.abs((row - queenRow) / (col - this.queens[queenRow])) === 1) {
        return false;
      }
    }
    return true;
  }

  placeNextQueen(tryRow, tryCol) {
    var _placeQueen = (row, col) => {
      delete this.rows[row];
      delete this.cols[col];
      this.queens[row] = col;
      return this;
    };

    if ((tryRow !== undefined && tryCol !== undefined) && this.hasOpenCellAtPos(tryRow, tryCol)) {
      return _placeQueen(tryRow, tryCol);
    } else {
      for (var row in this.rows) {
        for (var col in this.cols) {
          if (this.hasOpenCellAtPos(row, col)) {
            return _placeQueen(row, col);
          }
        }
      }
    }
    return false;
  }

  getNQueens() {
    var n = 0;
    for (var row in this.queens) {
      n++;
    }
    return n;
  }

  hasAnyOpenCells() {
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

  hasOpenCellAtPos(row, col) {
    return this.rows[row] && this.cols[col] && this.checkDiagonal(row, col);
  }
};

var solveNQueens = function(n) {
  var boardsHash = {};
  var memo = {};

  var fillBoard = (board) => {
    if (!board) {
      board = new Board(n);
    }

    if (board.getNQueens() === n) {
      if (!boardsHash[JSON.stringify(board.queens)]) {
        boardsHash[JSON.stringify(board.queens)] = 1;
      }
      return;
    } else if (board.hasAnyOpenCells()) {
      for (var row in board.rows) {
        for (var col in board.cols) {
          if (board.hasOpenCellAtPos(row, col)) {
            var key = `${JSON.stringify(board.queens)}-${row}-${col}`;
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

  var formatBoards = (queenCoords) => {
    var boards = [];
    for (var queens in queenCoords) {
      var board = new Array(n).fill([]).map(arr => new Array(n).fill('.'));
      queens = JSON.parse(queens);
      for (var coord in queens) {
        board[coord][queens[coord]] = 'Q';
      }
      boards.push(board.map(row => row.join('')));
    }
    return boards;
  }

  return formatBoards(boardsHash);
};

console.log(solveNQueens(7));
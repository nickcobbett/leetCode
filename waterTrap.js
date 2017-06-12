var bigAray = require('./bigArray.json');

var trap = function(array) {
  // count current bottom row
  var countBottomRow = (array) => {
    // first remove any leading or trailing white space
    var rowCount = 0;
    while (array[0] === 0) {
      array.shift();
    }
    while (array[array.length - 1] === 0) {
      array.pop();
    }
    if (!array.length || array.length === 1) {
      return 0;
    }

    for (var i = 1; i < array.length - 1; i++) {
      var left = array[i - 1];
      var k = i;
      while (left >= 1 && array[k] === 0 && k < array.length - 1) {
        rowCount++;
        k++;
      }
    }
    return rowCount;
  };

  //find max height
  var max = array.reduce((prev, next) => {
    if (next > prev) {
      return next;
    } else {
      return prev;
    }
  }, 0);

  // decrease each value by one
  var decrementByOne = (array) => {
    return array.map(val => {
      if (val > 0) {
        return val - 1;
      } else {
        return val;
      }
    });
  };


  var count = countBottomRow(array);
  //count for each row
  for (var i = 0; i < max; i++) {
    array = decrementByOne(array)
    console.log(count);
    count += countBottomRow(array);
  }

  return count;
};

var testTrap1 = [0,1,0,2,1,0,1,3,2,1,2,1]
// console.log(trap(bigAray))
var matrixInput = [0, 1, 2, 3, 4]
var matrix = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 1, 1, 1],
  [0, 1, 1, 1, 1]
]


var buildMatrix = (array) => {
  var matrix = [];
  for (var i = 0; i < array.length; i++) {

  }
}


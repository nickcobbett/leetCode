/**
 * @param {number[]} nums
 * @return {number}
 */

// Given [3, 1, 5, 8]
// nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
// coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
// Return 167
var Tree = function(nums, sum) {
  this.nums = nums;
  this.sum = 0;
  this.children = [];
};

var Node = function(nums, sum) {
  this.nums = nums;
  this.sum = sum;
  this.children = [];
};

var memoize = (func) => {
  var memo = {};
  var slice = Array.prototype.slice;

  var f = (x, n) => {

    var args = slice.call(arguments);
    memo[x] = memo[x] || {};

    if (x in memo && n in memo[x]) {
      return memo[x][n];
    } else {
      return (memo[x][n] = func.apply(this, args));
    }

  };
  return f;
}

var maxCoins = function(array) {
  // break up array into individual units with for loop
  // var sum = 0;
  var sums = [];

  var summer = (array, sum) => {
    if (array.length === 1) {
      sum += array[0];
      sums.push(sum);
    } else {
      for (var i = 0; i < array.length; i++) {
        var sumForOneVal = 0
        var copy = array.slice();
        var left = array[i - 1] || 1;
        var right = array[i + 1] || 1;
        var lastCoin = copy.splice(i, 1)[0];
        for (var k = 0; k < copy.length; k++) {
          // var sumForTwoVals =

        }
      }
    }
  };
  summer(array, 0);
  return sums;
  // for each el add its sum to sum of next elemen
};

var memoMax = memoize(maxCoins);
var max = memoMax([3, 1, 5, 8]);
console.log(max);
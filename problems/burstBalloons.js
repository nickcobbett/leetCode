/**
 * @param {number[]} nums
 * @return {number}
 */

// Given [3, 1, 5, 8]
// nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
// coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
// Return 167
class Tree {
  constructor(nums, sum) {
    this.nums = nums;
    this.sum = sum;
    this.children = [];
  }

  burst() {
    for (var i = 0; i < this.nums.length; i++) {

      this.nums[i];
    }
  }
};

var maxCoins = function(array) {
  var sumsHash = {};


};

console.log(maxCoins([3, 1, 5, 8]) === 167)
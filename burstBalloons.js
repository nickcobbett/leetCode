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

var maxCoins = function(nums) {
  // initialize tree
  var tree = new Tree(nums);
  for (var i = 0; i < nums.length; i++) {
    var copy = nums.slice();
    var left = nums[i - 1] || 1;
    var right = nums[i + 1] || 1;
    var val = copy.splice(i, 1);
    tree.children.push(new Node(copy, left * val * right));
  }





  var buildTree = () => {
    var memo = {};

    function f(node) {

      var args = JSON.stringify(node);
      var result;

      if (memo[args]) {
        result = memo[args];
      } else {
        if (!node.nums.length) {
          result = 1;
        } else {
          node.children.forEach(childNode => {
            var copy = nums.slice();
            var val = copy.splice(i, 1);
            memo[JSON.stringify(childNode)] = result = new Node(copy, ((nums[i - 1] || 1) * val * (nums[i + 1] || 1)) + node.childNode.sum);
            childNode.children.push(result);
            result = f(childNode);
          });
        }
      }
      return result;
    }
    return f;
  };

  console.log(buildTree(tree));
  // console.log(res);
  console.log(tree);
};


maxCoins([3, 1, 5, 8])
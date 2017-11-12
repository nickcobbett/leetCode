/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

var preOrderTraversal = function(node) {
  var result = [];

  result.push(node.val);

  if (node.left && node.right) {
    return result.concat(preOrderTraversal(node.left)).concat(preOrderTraversal(node.right));
  } else if (node.left && !node.right) {
    return result.concat(preOrderTraversal(node.left));
  } else if (node.right && !node.left) {
    return result.concat(preOrderTraversal(node.right));
  } else if (!node.left && !node.right) {
    return result;
  }
};

var tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

var tree2 = new TreeNode(1);
tree2.right = new TreeNode(2);
tree2.right.left = new TreeNode(3);
console.log(preOrderTraversal(tree));
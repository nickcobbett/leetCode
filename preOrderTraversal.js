var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
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

var inOrderTraversal = function(node) {
  var result = [];
  var helper = (node) => {
    if (node.left) {
      helper(node.left);
    }
    result.push(node.val);
    if (node.right) {
      helper(node.right);
    }
  };
  helper(node);
  return result;
};

var postOrderTraversal = function(node) {
  var result = [];
  var helper = function(node) {
    if (node.left) {
      helper(node.left);
    }
    if (node.right) {
      helper(node.right)
    }
    result.push(node.val);
  }
  helper(node);
  return result;
};

// console.log(preOrderTraversal(tree));
console.log(postOrderTraversal([tree]));
console.log(JSON.stringify(postOrderTraversal(tree)) === JSON.stringify([4, 5, 2, 6, 7, 3, 1]));
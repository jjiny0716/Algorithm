/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;

  function makeSum(node, digits = []) {
    if (node === null) return;
    digits.push(node.val);
    if (node.left === null && node.right === null) {
      sum += digits.reduce((s, value, i) => (s += value * Math.pow(10, digits.length - i - 1)), 0);
      digits.pop();
      return;
    }
    makeSum(node.left, digits);
    makeSum(node.right, digits);
    digits.pop();
  }

  makeSum(root);

  return sum;
};

// other
var sumNumbers = function(root) {
    
  function traverse(node, num) {
      if(!node) return null;
      num += node.val
      if(!node.left && !node.right) return +num;
      return traverse(node.left, num) + traverse(node.right, num);
  }
  return traverse(root, '');
};
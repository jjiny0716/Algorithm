/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let count = 0, maxCount = 0, last, modes = [];

  function traverse(node) {
    if (!node) return;
    traverse(node.left);

    if (last === undefined || last !== node.val) count = 1;
    else count++;
    
    if (count === maxCount) modes.push(node.val);
    else if (count > maxCount) {
      modes = [node.val];
      maxCount = count;
    }
    last = node.val;

    traverse(node.right);
  }
  traverse(root);

  return modes;
};
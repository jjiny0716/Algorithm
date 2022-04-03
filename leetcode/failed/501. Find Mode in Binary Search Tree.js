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
var findMode = function (root) {
  let val, maxCount = 0, streak = 0;
  function traverse(node, prevVal = null) {
    if (node.left) prevVal = traverse(node.left, prevVal);

    if (node.val === null || node.val === prevVal) streak++;
    else streak = 0;

    if (maxCount < streak) [val, maxCount] = [node.val, streak];
    if (node.right) traverse(node.right, prevVal);
  }
  traverse(root);

  return val;
};

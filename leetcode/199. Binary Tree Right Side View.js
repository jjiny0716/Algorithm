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
var rightSideView = function(root) {
  const result = [];

  function traverse(node, level = 0) {
    if (!node) return;
    traverse(node.left, level + 1);
    result[level] = node.val;
    traverse(node.right, level + 1);
  }
  traverse(root);

  return result;
};
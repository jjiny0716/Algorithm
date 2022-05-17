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
 * @return {number}
 */
var goodNodes = function(root) {
  function countGoodNodes(node, maxValueInPath) {
    if (!node) return 0;
    return (node.val >= maxValueInPath ? 1 : 0) + countGoodNodes(node.left, Math.max(node.val, maxValueInPath)) + countGoodNodes(node.right, Math.max(node.val, maxValueInPath));
  }

  return countGoodNodes(root, -Infinity);
};
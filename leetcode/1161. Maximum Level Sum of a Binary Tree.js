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
var maxLevelSum = function(root) {
  const levelSum = [];

  function getAllLevelSum(node, level) {
    if (!node) return;

    levelSum[level] = (levelSum[level] || 0) + node.val;
    getAllLevelSum(node.left, level + 1);
    getAllLevelSum(node.right, level + 1);
  }
  getAllLevelSum(root, 0);

  const max = Math.max(...levelSum);
  return levelSum.findIndex((sum) => sum === max) + 1; 
};


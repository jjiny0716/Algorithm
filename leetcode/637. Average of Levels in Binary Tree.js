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
var averageOfLevels = function(root) {
  const result = [];
  function getAllValueOfLevels(node, level = 0) {
    if (!node) return;
    if (!result[level]) result[level] = [];
    result[level].push(node.val);

    getAllValueOfLevels(node.left, level + 1);    
    getAllValueOfLevels(node.right, level + 1);   
  }
  getAllValueOfLevels(node);

  return result.map((values) => values.reduce((prev, cur) => prev += cur, 0) / values.length);
};
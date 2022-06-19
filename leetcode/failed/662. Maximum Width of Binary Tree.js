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
var widthOfBinaryTree = function (root) {
  const minMaxOfLevels = [];
  let result = 0;
  function traverse(node, position = 0, level = 0) {
    if (!node) return;

    traverse(node.left, position * 2, level + 1);

    if (minMaxOfLevels[level]) {
      minMaxOfLevels[level][0] = Math.min(minMaxOfLevels[level][0], position);
      minMaxOfLevels[level][1] = Math.max(minMaxOfLevels[level][1], position);
    } else {
      if (!node.left || !node.right) position = 0;
      minMaxOfLevels[level] = [position, position];
    }
    result = Math.max(result, minMaxOfLevels[level][1] - minMaxOfLevels[level][0]);
    
    traverse(node.right, position * 2 + 1, level + 1);
  }
  traverse(root);

  return result;
};

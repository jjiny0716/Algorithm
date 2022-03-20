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
var deepestLeavesSum = function (root) {
  let deepestLevel = 0, sum = 0;

  function traverse(node, level) {
    if (node === null) return;
    traverse(node.left, level + 1);
    if (level > deepestLevel) {
      deepestLevel = level;
      sum = node.val;
    }
    else if (level === deepestLevel) sum += node.val;
    traverse(node.right, level + 1);
  }
  traverse(root, 0);
  return sum;
};

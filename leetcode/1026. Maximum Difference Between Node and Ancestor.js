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
var maxAncestorDiff = function(root) {
  let result = 0;
  function getMaxDiff(node, parentMax = root.val, parentMin = root.val) {
    if (!node) return;

    result = Math.max(result, Math.abs(node.val - parentMax), Math.abs(node.val - parentMin));
    parentMax = Math.max(parentMax, node.val);
    parentMin = Math.min(parentMin, node.val);
    getMaxDiff(node.left, parentMax, parentMin);
    getMaxDiff(node.right, parentMax, parentMin);
  }
  getMaxDiff(root);

  return result;
};
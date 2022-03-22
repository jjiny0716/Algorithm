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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = 0, result = null;
  function traverse(node) {
    if (!node || result !== null) return;
    traverse(node.left);
    if (++count === k) result = node.val;
    traverse(node.right);
  }
  traverse(root);

  return result;
};

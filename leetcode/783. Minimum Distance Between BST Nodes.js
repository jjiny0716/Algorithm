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
var minDiffInBST = function (root) {
  let result = Infinity;
  let last = Infinity;
  function inorderTraverse(node) {
    if (!node) return;
    inorderTraverse(node.left);
    result = Math.min(result, Math.abs(last - node.val));
    last = node.val;
    inorderTraverse(node.right);
  }
  inorderTraverse(root);

  return result;
};

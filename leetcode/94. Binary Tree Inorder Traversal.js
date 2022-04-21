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
var inorderTraversal = function (root) {
  const result = [];
  function inorderTraverse(node) {
    if (!node) return;
    inorderTraverse(node.left);
    result.push(node.val);
    inorderTraverse(node.right);
  }
  inorderTraversa(root);

  return result;
};

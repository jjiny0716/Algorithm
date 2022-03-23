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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  let isUniValued = true;
  function traverse(node, prevValue) {
    if (node === null || !isUniValued) return;
    if (node.val !== prevValue) isUniValued = false;
    traverse(node.left, node.val);
    traverse(node.right, node.val);
  }
  traverse(root, root.val);
  return isUniValued;
};

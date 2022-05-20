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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
  function dfsToPruning(node) {
    if (!node) return 0;

    const leftSum = dfsToPruning(node.left);
    if (leftSum === 0) node.left = null;

    const rightSum = dfsToPruning(node.right);
    if (rightSum === 0) node.right = null;

    return node.val + leftSum + rightSum;

  }

  return dfsToPruning(root) ? root : null;
};

// 우와
// public TreeNode pruneTree(TreeNode root) {
//   if (root == null) return null;
//   root.left = pruneTree(root.left);
//   root.right = pruneTree(root.right);
//   if (root.left == null && root.right == null && root.val == 0) return null;
//   return root
// }
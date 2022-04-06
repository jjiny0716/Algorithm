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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  function dfs(node, parent) {
    if (!node) return;
    if (node.val < low) {
      if (parent) parent.left = node.right;
      else root = node.right;
      dfs(node.right, parent);
    }
    else if (node.val > high) {
      if (parent) parent.right = node.left;
      else root = node.left;
      dfs(node.left, parent);
    }
    else {
      dfs(node.left, node);
      dfs(node.right, node);
    }
  }
  dfs(root, null);
  return root;
};

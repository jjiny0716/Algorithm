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
var longestZigZag = function (root) {
  let result = 0;
  function dfs(node, from, pathLength) {
    if (!node) return;
    result = Math.max(result, pathLength);
    dfs(node.left, "right", from === "left" ? pathLength + 1 : 0);
    dfs(node.right, "left", from === "right" ? pathLength + 1 : 0);
  }
  dfs(root, null, 0);

  return result;
};

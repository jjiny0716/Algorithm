/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let result = 0;

  function dfs(node, level = 0) {
    if (!node) return;
    for (const child of node.children) {
      dfs(child, level + 1);
    }
    result = Math.max(result, level);
  }
  dfs(root);

  return result + 1;
};
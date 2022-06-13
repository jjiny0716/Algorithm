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
 var getMinimumDifference = function(root) {
  let last, result = Infinity;
  function traverse(node) {
    if (!node) return;

    traverse(node.left);
    if (last !== undefined) {
      result = Math.min(result, Math.abs(node.val - last));
    }
    last = node.val;
    traverse(node.right);
  }
  traverse(root);

  return result;
};
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
var longestUnivaluePath = function (root) {
  let last;
  let curLength = 0, result = 0;
  function traverse(node) {
    if (!node) return;

    traverse(node.left);
    curLength = last === node.val ? curLength + 1 : 0;
    result = Math.max(result, curLength);

    const tmpLength = curLength;
    last = node.val;
    traverse(node.right);

    curLength = tmpLength;
    last = node.val;
  }
  traverse(root);
  return result;
};

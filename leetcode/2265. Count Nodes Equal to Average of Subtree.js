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
var averageOfSubtree = function (root) {
  let result = 0;
  function traverse(node) {
    if (!node) return [0, 0];
    const [s1, c1] = traverse(node.left);
    const [s2, c2] = traverse(node.right);
    const sum = s1 + s2 + node.val;
    const count = c1 + c2 + 1;
    if (Math.floor(sum / count) === node.val) result++;
    return [sum, count];
  }
  traverse(root);

  return result;
};

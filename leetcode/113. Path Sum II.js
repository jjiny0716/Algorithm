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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];
  function traverse(node, values, remainSum) {
    if (node === null) return;
    values.push(node.val);
    remainSum -= node.val;
    if (node.left === null && node.right === null && remainSum === 0) {
      result.push([...values]);
      values.pop();
      return;
    }
    traverse(node.left, values, remainSum);
    traverse(node.right, values, remainSum);
    values.pop();
  }
  traverse(root, [], targetSum);
  return result;
};

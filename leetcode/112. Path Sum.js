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
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  return findTargetSum(root, 0, targetSum);
};

function findTargetSum(node, sum, targetSum) {
  if (node === null) return false;
  if (node.left === null && node.right === null) {
    if (sum + node.val === targetSum) return true
  }
  return findTargetSum(node.left, sum + node.val, targetSum) || findTargetSum(node.right, sum + node.val, targetSum);
}

// 굳이 함수를 하나 더 안만들어도 재귀로 구현이 가능했음.

var hasPathSum = function (root, targetSum) {
  if (root === null) return false;
  if (root.left === null && root.right === null && targetSum - root.val === 0) return true;
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
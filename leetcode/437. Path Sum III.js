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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  const sumMap = new Map();
  sumMap.set(0, 1);
  let result = 0;

  function getResult(node, sum = 0) {
    if (!node) return;
    const curSum = sum + node.val
    if (sumMap.get(curSum - targetSum) !== undefined) result += sumMap.get(curSum - targetSum);
    sumMap.set(curSum, (sumMap.get(curSum) || 0) + 1);
    getResult(node.left, curSum);
    getResult(node.right, curSum);

    sumMap.set(curSum, sumMap.get(curSum) - 1);
  }
  getResult(root);

  return result;
};

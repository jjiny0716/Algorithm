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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function (root, n, x) {
  function findTargetNode(node, targetValue) {
    if (node === null) return;
    if (node.val === targetValue) return node;
    
    let result = findTargetNode(node.left, targetValue);
    if (result) return result;
    result = findTargetNode(node.right, targetValue);
    if (result) return result;
    return;
  }

  function countNodes(node) {
    if (node === null) return;
    return 1 + countNodes(node.left) + countNodes(right);
  }

  const xNode = findTargetNode(root, x);
  const leftCount = countNodes(xNode.left);
  const rightCount = countNodes(xNode.right);
  const remainCount = n - leftCount - rightCount - 1;
  const maxCount = Math.max(leftCount, rightCount, remainCount);
  if (maxCount > n - maxCount) return true;
  return false;
};

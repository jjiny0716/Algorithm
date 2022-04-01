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
var distributeCoins = function (root) {
  let moveCount = 0;
  function traverse(node) {
    if (node === null) return 0;
    const leftCoin = traverse(node.left);
    const rightCoin = traverse(node.right);
    moveCount += Math.abs(leftCoin) + Math.abs(rightCoin);
    return leftCoin + rightCoin + node.val - 1;
  }
  traverse(root);
  return moveCount;
};



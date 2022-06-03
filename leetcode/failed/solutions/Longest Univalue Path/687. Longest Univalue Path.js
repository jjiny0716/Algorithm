// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  let result = 0;

  function inorderTraverse(node) {
    if (!node) return [10000, 0];

    const leftResult = inorderTraverse(node.left);
    const rightResult = inorderTraverse(node.right);

    const leftLength = leftResult[0] === node.val ? leftResult[1] : 0;
    const rightLength = rightResult[0] === node.val ? rightResult[1] : 0;

    result = Math.max(result, leftLength + rightLength);
    
    return [node.val, Math.max(leftLength, rightLength) + 1];
  }
  
  inorderTraverse(root);
  return result;
};
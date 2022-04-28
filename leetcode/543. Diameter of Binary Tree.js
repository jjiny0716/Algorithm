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
 var diameterOfBinaryTree = function (root) {
  let maxDistance = 0;
  function traverse(node, depth = 0) {
    if (!node) return 0;
    const leftMaxDepth = traverse(node.left, depth + 1);
    const rightMaxDepth = traverse(node.right, depth + 1);
    maxDistance = Math.max(maxDistance, leftMaxDepth + rightMaxDepth - depth * 2);
    return Math.max(leftMaxDepth, rightMaxDepth, depth);
  }

  traverse(root);
  return maxDistance;
};

// without depth parameter
// Java
// public class Solution {
//   int max = 0;
  
//   public int diameterOfBinaryTree(TreeNode root) {
//       maxDepth(root);
//       return max;
//   }
  
//   private int maxDepth(TreeNode root) {
//       if (root == null) return 0;
      
//       int left = maxDepth(root.left);
//       int right = maxDepth(root.right);
      
//       max = Math.max(max, left + right);
      
//       return Math.max(left, right) + 1;
//   }
// }
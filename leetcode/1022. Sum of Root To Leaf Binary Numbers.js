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
var sumRootToLeaf = function (root) {
  let result = 0;
  function traverse(node, binary) {
    if (!node) return;
    traverse(node.left, binary + node.val);
    traverse(node.right, binary + node.val);
    if (node.left === null && node.right === null) result += Number.parseInt(binary + node.val, 2);
  }
  traverse(root, "");
  return result;
};


// other(자바)
// 이진수를 하나 붙일 때마다 2씩 곱해주면 10진수 표현이 된다는 아이디어

// public int sumRootToLeaf(TreeNode root) {
//   return dfs(root, 0);
// }

// public int dfs(TreeNode root, int val) {
//   if (root == null) return 0;
//   val = val * 2 + root.val;
//   return root.left == root.right ? val : dfs(root.left, val) + dfs(root.right, val);
// }
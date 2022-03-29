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
var sumOfLeftLeaves = function (root) {
  let result = 0;
  function traverse(node, pos) {
    if (node === null) return;
    if (pos === "left" && node.left === null && node.right === null) result += node.val;
    traverse(node.left, "left");
    traverse(node.right, "right");
  }   
  traverse(root, null);
  return result;
};


// other
// 해당 노드에서 검사하는 것이 아니라, 부모에서 검사하는 아이디어
// 내부 함수를 따로 작성하지 않고 재귀함수로 구현할 수 있다.

// public int sumOfLeftLeaves(TreeNode root) {
//   if(root == null) return 0;
//   int ans = 0;
//   if(root.left != null) {
//       if(root.left.left == null && root.left.right == null) ans += root.left.val;
//       else ans += sumOfLeftLeaves(root.left);
//   }
//   ans += sumOfLeftLeaves(root.right);
  
//   return ans;
// }

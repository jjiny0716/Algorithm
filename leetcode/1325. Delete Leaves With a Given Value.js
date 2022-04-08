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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (node, target) {
  if (!node) return;
  removeLeafNodes(node.left, target);
  removeLeafNodes(node.right, target);
  if (node.left && !node.left.left && !node.left.right && node.left.val === target) node.left = null;
  if (node.right && !node.right.left && !node.right.right && node.right.val === target) node.right = null;
  if (!node.left && !node.right && node.val === target) node = null;
  return node;
};


// c++ 깔끔
// TreeNode* removeLeafNodes(TreeNode* r, int target) {
//   if (r == nullptr) return nullptr;
//   r->left = removeLeafNodes(r->left, target);
//   r->right = removeLeafNodes(r->right, target);
//   return (r->left == r->right && r->val == target) ? nullptr : r;
// }
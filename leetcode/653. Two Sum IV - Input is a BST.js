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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const set = new Set();
  let result = false;
  function traverse(node) {
    if (!node || result) return;
    traverse(node.left);
    if (set.has(k - node.val)) result = true;
    set.add(node.val);
    traverse(node.right);
  }
  traverse(root);

  return result;
};
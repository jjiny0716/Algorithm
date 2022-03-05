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
var findBottomLeftValue = function (root) {
  let value, levelOfValue = 0;

  function traverse(node, level) {
    if (node === null) return;
    traverse(node.right, level + 1);
    if (level >= levelOfValue) {
      value = node.val;
      levelOfValue = level;
    }
    traverse(node.left, level + 1);
  }

  traverse(root, 1);

  return value;
};



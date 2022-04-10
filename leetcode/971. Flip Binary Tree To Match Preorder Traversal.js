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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function (root, voyage, result = []) {
  if (!root) return result;
  if (root.val !== voyage[0]) return [-1];
  voyage.shift();
  if (root.left && root.left.val !== voyage[0]) {
    result.push(root.val);
    [root.left, root.right] = [root.right, root.left];
  }
  if (flipMatchVoyage(root.left, voyage, result)[0] === -1 || flipMatchVoyage(root.right, voyage, result)[0] === -1) return [-1];

  return result;
};

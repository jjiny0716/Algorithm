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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const result = [];
  
  function traverse(node, level) {
    if (node === null) return;

    if (result[level] === undefined) result[level] = [];
    result[level].push(node.val);

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }
  traverse(root, 0);

  return result.map((line, i ) => i % 2 === 0 ? line : line.reverse());
};


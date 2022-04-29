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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];
  function traverse(node, path) {
    if (!node) return;
    path.push(node.val);
    traverse(node.left, path);
    traverse(node.right, path);
    if (node.left === null  && node.right === null) result.push(path.join("->"));
    path.pop();
  }
  traverse(root, []);

  return result;
};

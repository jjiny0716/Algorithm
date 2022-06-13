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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
  let toStartPath;
  let toDestPath;

  function getTwoPath(node, path) {
    if (!node) return;

    path.push('L');
    getTwoPath(node.left, path);
    path.pop();

    if (node.val === startValue) toStartPath = path.join('');
    if (node.val === destValue) toDestPath = path.join('');

    path.push('R');
    getTwoPath(node.right, path);
    path.pop();
  }
  getTwoPath(root, []);

  let i = 0;
  while (toStartPath[i] === toDestPath[i]) i++;

  return 'U'.repeat(toStartPath.length - i) + toDestPath.slice(i);
};

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// tree serialize
var isSubtree = function(root, subRoot) {
  function getTreeString(node) {
    if (!node) return 'E';
    return ` ${getTreeString(node.left)} ${node.val} ${getTreeString(node.right)} `;
  }

  const rootString = getTreeString(root);
  const subRootString = getTreeString(subRoot);

  return rootString.includes(subRootString);
};
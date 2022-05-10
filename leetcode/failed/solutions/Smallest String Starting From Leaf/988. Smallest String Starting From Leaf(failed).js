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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  if (root === null) return;
  const leftStr = smallestFromLeaf(root.left);
  const rightStr = smallestFromLeaf(root.right);
  return getSmallerStr(leftStr, rightStr) + String.fromCharCode(root.val + 'a'.charCodeAt(0));
};

function getSmallerStr(leftStr, rightStr) {
  if (leftStr === undefined || rightStr === undefined) {
    return (leftStr ?? "") + (rightStr ?? "");
  }
  return leftStr.localeCompare(rightStr) === -1 ? leftStr : rightStr;
}

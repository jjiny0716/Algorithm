/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function getLeafSequence(node) {
  if (!node) return [];
  if (!node.left && !node.right) return [node.val];
  return getLeafSequence(node.left).concat(getLeafSequence(node.right));
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const sequence1 = getLeafSequence(root1);
  const sequence2 = getLeafSequence(root2);
  return sequence1.every((v, i) => v === sequence2[i]) && sequence1.length === sequence2.length ;
};

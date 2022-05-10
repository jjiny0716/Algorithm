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
  let result = "";
  function findLexicographicallySmallestString(node, str) {
    if (!node) return;
      
    const nextStr = String.fromCharCode(node.val + "a".charCodeAt(0)) + str;
    if (node.left === null && node.right === null && (!result || result > nextStr)) {
      result = nextStr;
      return;
    }

    findLexicographicallySmallestString(node.left, nextStr);
    findLexicographicallySmallestString(node.right, nextStr);
  }
  findLexicographicallySmallestString(root, "");

  return result;
};

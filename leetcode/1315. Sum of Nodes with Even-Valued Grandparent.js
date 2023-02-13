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
var sumEvenGrandparent = function(root) {
  let result = 0;

  const dfs = (node, parentValue = null, grandparentValue = null) => {
    if (!node) return;
    if (grandparentValue && grandparentValue % 2 === 0) result += node.val;
    dfs(node.left, node.val, parentValue);
    dfs(node.right, node.val, parentValue);
  }
  dfs(root);

  return result;
};

const root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5];
console.log(sumEvenGrandparent(root));
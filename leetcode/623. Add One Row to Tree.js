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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
  if (depth === 1) {
    return new TreeNode(val, root, null);
  }
  
  const dfs = (node, curDepth = 1) => {
    if (!node) return;
    if (curDepth + 1 !== depth) {
      dfs(node.left, curDepth + 1);
      dfs(node.right, curDepth + 1);
      return; 
    } 

    const newLeftChild = new TreeNode(val, node.left, null);
    const newRightChild = new TreeNode(val, null, node.right);
    node.left = newLeftChild;
    node.right = newRightChild;
  }
  dfs(root);

  return root;
};
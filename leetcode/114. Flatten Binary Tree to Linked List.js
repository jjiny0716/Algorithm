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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const nodes = [];
    
  function preOrderTraversal(node) {
    nodes.push(node);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
  preOrderTraversal(root);
  for (let i = 0 ; i < nodes.length ; i++) {
    nodes[i].right = nodes[i + 1] || null;
    nodes[i].left = null;
  }
};


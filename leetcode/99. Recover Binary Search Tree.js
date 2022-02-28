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
var recoverTree = function (root) {
  const nodes = [];
  let swapped1, swapped2;

  function traverse(node) {
    if (node === null) return;
    traverse(node.left);
    nodes.push(node);
    traverse(node.right);
  }

  traverse(root);
  for (let i = 0 ; i < nodes.length ; i++) {
    if ((nodes[i - 1] !== undefined && nodes[i - 1].val > nodes[i].val) || (nodes[i + 1] !== undefined && nodes[i].val > nodes[i + 1].val)) {
      swapped1 = nodes[i];
      break;
    }
  }

  for (let i = nodes.length - 1 ; i >= 0 ; i--) {
    if ((nodes[i - 1] !== undefined && nodes[i - 1].val > nodes[i].val) || (nodes[i + 1] !== undefined && nodes[i].val > nodes[i + 1].val)) {
      swapped2 = nodes[i];
      break;
    }
  }

  [swapped1.val, swapped2.val] = [swapped2.val, swapped1.val];
};
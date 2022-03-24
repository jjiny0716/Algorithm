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
 * @return {number[]}
 */
// BFS
var largestValues = function (root) {
  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    let max = queue[0].val;
    for (let i = 0 ; i < queue.length ; i++) {
      const node = queue.shift();
      if (node === null) continue;
      max = Math.max(max, node.val);
      queue.push(node.left, node.right);
    } 
    result.push(max);
  }

  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// DFS
var largestValues = function (root) {
  const result = [];
  function traverse(node, level) {
    if (node === null) return;
    result[level] = Math.max(result[level] ?? node.val, node.val);
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse();
  return result;
};
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return;
  const queue = [root];
  const result = [];

  while (queue.length) {
    const len = queue.length;
    const values = [];
    for (let i = 0 ; i < len ; i++) {
      const node = queue.pop();
      values.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.shift(values);
  }

  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const result = [];
  
  function traverse(node, level) {
    if (node === null) return;
    if (node[level]) result[level].push(node.val);
    else result[level] = [node.val];
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }
  traverse(root, 0);

  return result;
};


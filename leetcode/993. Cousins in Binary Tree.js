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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
// dfs
var isCousins = function (root, x, y) {
  let xLevel, xParent, yLevel, yParent;
  function traverse(node, level, parent) {
    if (node === null) return;
    if (node.val === x) [xLevel, xParent] = [level, parent];
    if (node.val === y) [yLevel, yParent] = [level, parent];
    traverse(node.left, level + 1, node);
    traverse(node.right, level + 1, node);
  }
  traverse(root, 0, null);
  return xLevel === yLevel && xParent !== yParent;
};

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
// bfs
var isCousins = function (root, x, y) {
  let queue = [root];
  let count = 0, indexes = [];
  while (queue.length !== 0) {
    const newQueue = [];
    for (let i = 0 ; i < queue.length ; i++) {
      const node = queue.pop();
      if (node === null) continue;
      if (node.val === x || node.val === y) {
        count++;
        indexes.push(i);
      }
      newQueue.push(node.left, node.right);
    }
    if (count === 1) return false;
    else if (count === 2) {
      const [i1, i2] = indexes;
      if (i1 + 1 === i2 && i1 % 2 === 0) return false;
      else return true;
    }
    queue = newQueue;
  }

  return false;
};

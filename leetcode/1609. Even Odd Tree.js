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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  const queue = [root];
  let level = 0;
  while (queue.length) {
    const len = queue.length;
    let last = level % 2 === 0 ? 0 : Infinity;
    for (let i = 0 ; i < len ; i++) {
      const node = queue.shift();
      const val = node.val;
      if (level % 2 === 0 && (val % 2 === 0 || val <= last)) return false;
      if (level % 2 === 1 && (val % 2 === 1 || val >= last)) return false;
      last = val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++;
  }

  return true;
};

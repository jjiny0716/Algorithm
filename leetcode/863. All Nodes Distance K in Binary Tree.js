/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const adj = {};
  function convertTreeToGraph(node, parent) {
    if (!node) return;

    if (parent) {
      if (!adj[parent.val]) adj[parent.val] = [];
      if (!adj[node.val]) adj[node.val] = [];
      adj[parent.val].push(node.val);
      adj[node.val].push(parent.val);
    }

    convertTreeToGraph(node.left, node);
    convertTreeToGraph(node.right, node);
  }
  convertTreeToGraph(root, null);

  const visited = new Set();
  const queue = [target.val];
  visited.add(target.val);
  let distance = 0;
  while (queue.length) {
    if (distance === k) return queue;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const here = queue.shift();
      if (!adj[here]) continue;
      for (let there of adj[here]) {
        if (!visited.has(there)) {
          visited.add(there);
          queue.push(there);
        }
      }
    }
    distance++;
  }

  return [];
};

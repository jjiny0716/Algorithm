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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
  const adj = {};
  function treeToGraph(node, parent = null) {
    if (!node) return;

    const { val, left, right } = node;
    if (!adj[val]) adj[val] = [];

    if (parent) {
      adj[val].push(parent.val);
    }

    if (left) {
      adj[val].push(left.val);
      treeToGraph(left, node);
    }

    if (right) {
      adj[val].push(right.val);
      treeToGraph(right, node);
    }
  }
  treeToGraph(root);
  
  const queue = [start];
  const visited = new Set();
  let level = 0;
  while (queue.length) {
    const n = queue.length;
    for (let i = 0 ; i < n ; i++) {
      const here = queue.shift();
      if (visited.has(here)) continue;
      visited.add(here);

      for (const there of adj[here]) {
        if (visited.has(there)) continue;
        queue.push(there);
      }
    }
    level++;
  }

  return level - 1;
};
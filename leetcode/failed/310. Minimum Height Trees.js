/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  const adj = Array.from({length: n}, () => []);
  for (let edge of edges) {
    const [v1, v2] = edge;
    adj[v1].push(v2);
    adj[v2].push(v1);
  }

  let minDepth = 20000;
  let roots = [];
  let visited = null;
  let cannotBeAnswer = false;
  for (let i = 0 ; i < n ; i++) {
    visited = Array.from({length: n}, false);
    cannotBeAnswer = false;
    const depth = dfs(i, visited, 0);
    if (cannotBeAnswer) continue;
    if (depth === minDepth) {
      roots.push(i);
    }
    else if (depth < minDepth) {
      minDepth = depth;
      roots = [i];
    }
  }
  
  function dfs(here, visited, depth) {
    if (cannotBeAnswer) return 0;
    if (depth > minDepth) {
      cannotBeAnswer = true;
      return 0;
    }
    if (visited[here]) return 0;
    visited[here] = true;
    let maxDepth = 0;
    for (let there of adj[here]) {
      maxDepth = Math.max(maxDepth, dfs(there, visited, depth + 1));
    }
    return 1 + maxDepth;
  }

  return roots;
};

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  const adj = Array.from({ length: edges.length + 1 }, () => []);
  for (const [v1, v2] of edges) {
    adj[v1].push(v2);
    adj[v2].push(v1);
  }

  const visited = new Set();
  const revisited = new Set();
  function dfs(here, last) {
    if (visited.has(here)) {
      revisited.add([here, last]);
      return;
    }

    visited.add(here);

    for (const there of adj[here]) {
      if (there === last) continue;
      dfs(there, here);
    }
  }
  dfs(1);

  return revisited;
};

const edges = [[1,2],[1,3],[2,3]];
console.log(findRedundantConnection(edges));

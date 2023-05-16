/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
  const visited = new Array(n).fill(false);
  const graph = [];
  const adj = {};
  for (const [v1, v2] of edges) {
    if (!adj[v1]) adj[v1] = [];
    if (!adj[v2]) adj[v2] = [];
    adj[v1].push(v2);
    adj[v2].push(v1);
  }

  const dfs = (here) => {
    if (visited[here]) return;
    visited[here] = true;
    graph.push(here);
    if (!adj[here]) return;

    for (const there of adj[here]) dfs(there);
  }

  let result = 0;
  for (let i = 0 ; i < n ; i++) {
    if (visited[i]) continue;
    dfs(i);

    let completeCount = 0;
    for (const start of graph) {
      let adjCount = 0;
      for (const end of graph) {
        if (start === end) continue;
        if (!adj[start]) break;
        if (adj[start].find((value) => value === end) !== undefined) adjCount++;
      }
      if (adjCount !== graph.length - 1) break;
      completeCount++; 
    }

    if (completeCount === graph.length) result++;
    graph.splice(0, graph.length);
  }

  return result;
};

const n = 6, edges = [[0,1],[0,2],[1,2],[3,4]];
console.log(countCompleteComponents(n, edges));
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {
  const adj = Array.from({ length: n}, () => []);
  for (const [s, e] of edges) {
    adj[s].push(e);
    adj[e].push(s);
  }

  let result = 0;
  let count = 0;
  const visited = new Set();
  function dfs(here) {
    if (visited.has(here)) return;
    count++;
    visited.add(here);
    for (const there of adj[here]) {
      dfs(there);
    }
  }

  for (let i = 0 ; i < n ; i++) {
    count = 0;
    dfs(i);
    if (count) result += count * (n - count);
  }

  return result / 2;
};

const n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]];
console.log(countPairs(n, edges));
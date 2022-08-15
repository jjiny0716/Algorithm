/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
  const restrictedSet = new Set(restricted);
  const visitedSet = new Set();
  const adj = Array.from({ length: n }, () => []);
  for (const [v1, v2] of edges) {
    adj[v1].push(v2);
    adj[v2].push(v1);
  }

  let result = 0;
  function dfs(here) {
    if (visitedSet.has(here) || restrictedSet.has(here)) return;
    result++;
    visitedSet.add(here);
    for (const there of adj[here]) {
      dfs(there);
    }
  }
  dfs(0);

  return result;
};

const n = 7,
  edges = [
    [0, 1],
    [1, 2],
    [3, 1],
    [4, 0],
    [0, 5],
    [5, 6],
  ],
  restricted = [4, 5];
console.log(reachableNodes(n, edges, restricted));

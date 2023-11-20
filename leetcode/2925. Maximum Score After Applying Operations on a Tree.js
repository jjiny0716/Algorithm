/**
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
var maximumScoreAfterOperations = function(edges, values) {
  const n = values.length;
  const adj = Array.from({ length: n }, () => []);
  for (const [n1, n2] of edges) {
    adj[n1].push(n2);
    adj[n2].push(n1);
  }
  
  const totalValue = values.reduce((prev, cur) => prev + cur, 0);
  const visited = new Set();
  const dfs = (node) => {
    if (visited.has(node)) return 0;
    visited.add(node);
    const totalNeedValue = adj[node].reduce((totalNeedValue, node) => totalNeedValue + dfs(node), 0);
    if (!totalNeedValue) return values[node];
    return Math.min(values[node], totalNeedValue);
  }

  return totalValue - dfs(0);
};

const edges = [[5,1],[4,3],[2,4],[6,2],[0,5],[0,6]], values = [18,24,5,20,23,6,7];
console.log(maximumScoreAfterOperations(edges, values));
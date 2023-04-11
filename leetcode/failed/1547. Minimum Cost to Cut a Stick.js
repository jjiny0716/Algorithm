/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
  const edges = [0, ...cuts.sort((a, b) => a - b), n];
  const map = new Map();

  const dfs = () => {
    if (edges.length === 2) return 0;
    const serializedEdges = edges.join(' ');
    if (map.has(serializedEdges)) return map.get(serializedEdges);
    let result = Infinity;

    for (let i = 1 ; i < edges.length - 1 ; i++) {
      const cost = edges[i + 1] - edges[i - 1];
      const edge = edges.splice(i, 1)[0];
      result = Math.min(result, dfs() + cost);
      edges.splice(i, 0, edge);
    }

    map.set(serializedEdges, result);
    return result;
  }

  return dfs();
};

const n = 13, cuts = [3,12,1,5,9,11,4,8,7,2,6,10]
console.log(minCost(n, cuts));

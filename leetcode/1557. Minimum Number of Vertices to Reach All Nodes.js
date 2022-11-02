/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
  const connectedCount = Array.from({ length: n }).fill(0);
  for (const [s, e] of edges) connectedCount[e]++;
  return connectedCount.reduce((vertexes, count, i) => {
    !count && vertexes.push(i);
    return vertexes;
  }, []);
};

const n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]];
console.log(findSmallestSetOfVertices(n, edges));
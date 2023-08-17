/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  const makeMap = (map, [s, e]) => {
    if (!map.has(s)) map.set(s, []);
    map.get(s).push(e);
    return map;
  }
  const redEdgeMap = redEdges.reduce(makeMap, new Map());
  const blueEdgeMap = blueEdges.reduce(makeMap, new Map());
  const ans = new Array(n).fill(-1);
  const visitedAsRed = new Set();
  const visitedAsBlue = new Set();
  const queue = [{ node: 0, color: "black" }];
  let level = 0;
  while (queue.length) {
    const n = queue.length;
    for (let i = 0 ; i < n ; i++) { 
      const { node, color } = queue.shift();
      if (color === "red" && visitedAsRed.has(node)) continue;
      if (color === "blue" && visitedAsBlue.has(node)) continue;

      if (color === "red") visitedAsRed.add(node);
      if (color === "blue") visitedAsBlue.add(node);
      if (ans[node] === -1) ans[node] = level;

      if (color !== "red" && redEdgeMap.has(node)) {
        for (const nextNode of redEdgeMap.get(node)) {
          queue.push({ node: nextNode, color: "red" });
        }
      }
      if (color !== "blue" && blueEdgeMap.has(node)) {
        for (const nextNode of blueEdgeMap.get(node)) {
          queue.push({ node: nextNode, color: "blue" });
        }
      }

    }
    level++;
  }

  return ans;
};

const n = 5, redEdges = [[2,2],[0,4],[4,2],[4,3],[2,4],[0,0],[0,1],[2,3],[1,3]], blueEdges = [[0,4],[1,0],[1,4],[0,0],[4,0]];
console.log(shortestAlternatingPaths(n, redEdges, blueEdges));
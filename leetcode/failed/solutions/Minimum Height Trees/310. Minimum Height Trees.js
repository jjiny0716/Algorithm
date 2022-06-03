/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (n === 1) return [0];
  const adj = Array.from({ length: n }, () => []);
  const connectedCount = Array.from({ length: n }, () => 0);
  for (let [v1, v2] of edges) {
    adj[v1].push(v2);
    adj[v2].push(v1);
    connectedCount[v1]++;
    connectedCount[v2]++;
  }

  const queue = [];
  for (let i = 0 ; i < connectedCount.length ; i++) {
    if (connectedCount[i] === 1) queue.push(i);
  } 

  let result = [];
  while (queue.length) {
    const len = queue.length;
    if (len <= 2) result = [...queue];

    for (let i = 0 ; i < len ; i++) {
      const v = queue.shift();
      for (let connectedVertex of adj[v]) {
        connectedCount[connectedVertex]--;
        if (connectedCount[connectedVertex] === 1) queue.push(connectedVertex);
      }
    }
  }

  return result;
};

const n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
console.log(findMinHeightTrees(n, edges));
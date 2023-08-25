/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
  const n = graph.length;
  const marking = new Array(n).fill(null);

  const dfs = (here, isMark) => {
    if (marking[here] === isMark) return true;
    else if (marking[here] === !isMark) return false;
    
    marking[here] = isMark;

    return graph[here].reduce((result, there) => result && dfs(there, !isMark), true);
  }

  for (let i = 0 ; i < n ; i++) {
    if (marking[i] === null && !dfs(i, true)) return false; 
  }

  return true;
};

const graph = [[1,2,3],[0,2],[0,1,3],[0,2]];
console.log(isBipartite(graph));
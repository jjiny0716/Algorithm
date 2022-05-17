/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
  const adj = Array.from({ length: n }, () => []);

  for (let [v1, v2] of edges) {
    adj[v1].push(v2);
    adj[v2].push(v1);
  }

  function traverse(here, prev) {
    let time = 0;
    for (let there of adj[here]) {
      if (there === prev) continue;
      time += traverse(there, here);
    }

    return (time || hasApple[here]) ? time + 2 : 0;
  }

  const result = traverse(0, -1);
  return result ? result - 2 : 0;
};

const n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false];
console.log(minTime(n, edges, hasApple));
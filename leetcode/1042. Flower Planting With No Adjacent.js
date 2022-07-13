/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(n, paths) {
  const result = new Array(n).fill(0);
  const adj = Array.from({ length: n + 1 }, () => []);
  for (let [s, e] of paths) {
    adj[s].push(e);
    adj[e].push(s);
  }


  function makeGarden(here) {
    if (result[here - 1]) return;

    const remainType = [false, true, true, true, true];
    for (let there of adj[here]) {
      remainType[result[there - 1]] = false;
    }

    for (let i = 1 ; i <= 4 ; i++) {
      if (remainType[i]) {
        result[here - 1] = i;
        break;
      }
    }

    for (let there of adj[here]) {
      makeGarden(there);
    }
  }
  
  for (let i = 1 ; i <= n ; i++) {
    makeGarden(i);
  }

  return result;
};

const n = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]];
console.log(gardenNoAdj(n, paths));
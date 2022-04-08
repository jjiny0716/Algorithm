/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  const adj = Array.from({length: n}, () => []);
  for (let i = 0 ; i < n ; i++) {
    if (i !== headID) adj[manager[i]].push(i);
  }
  
  function dfs(here, cost, informTime) {
    let result = cost + informTime[here];
    for (let there of adj[here]) {
      result = Math.max(result, dfs(there, cost + informTime[here], informTime));
    }
    return result;
  }
  return dfs(headID, 0, informTime);
};

const n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0];
console.log(numOfMinutes(n, headID, manager, informTime));
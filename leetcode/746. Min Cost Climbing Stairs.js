/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length
  for (let i = 0 ; i < n ; i++) {
    cost[i] += Math.min(cost[i - 2] || 0, cost[i - 1] || 0);
  }
  return Math.min(cost[n - 2], cost[n - 1]);
};

const cost = [1,100,1,1,1,100,1,1,100,1];
console.log(minCostClimbingStairs(cost));
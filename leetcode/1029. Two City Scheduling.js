/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  return costs.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0])).reduce((total, cost, i) => total += (i < costs.length / 2) ? cost[0] : cost[1], 0);
};

const costs = [
  [515, 563],
  [451, 713],
  [537, 709],
  [343, 819],
  [855, 779],
  [457, 60],
  [650, 359],
  [631, 42],
];
console.log(twoCitySchedCost(costs));
[
  [40, 9999],  9959
  [10, 40],  30
  [30, 50],  20
  [30, 45],  15
];
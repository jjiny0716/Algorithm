/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
  return cost.sort((a, b) => b - a).reduce((total, c, i) => total += i % 3 === 2 ? 0 : c, 0);
};

const cost = [6,5,7,9,2,2];
console.log(minimumCost(cost));
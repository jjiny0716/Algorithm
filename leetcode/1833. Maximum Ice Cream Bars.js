/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
  costs.sort((a, b) => a - b);
  let result = 0;
  for (let cost of costs) {
    if (cost > coins) break;
    coins -= cost;
    result++;
  }

  return result;
};

const costs = [1,6,3,1,2,5], coins = 20;
console.log(maxIceCream(costs, coins));
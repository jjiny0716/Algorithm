/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0;
  for (let i = 0 ; i < prices.length - 1 ; i++) {
    if (prices[i] < prices[i + 1]) result += prices[i + 1] - prices[i];
  }

  return result;
};

const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));
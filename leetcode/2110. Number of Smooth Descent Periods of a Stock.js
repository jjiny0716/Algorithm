/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
  let count = 1, result = 1;
  for (let i = 1 ; i < prices.length ; i++) {
    count = prices[i - 1] - 1 === prices[i] ? count + 1 : 1;
    result += count; 
  }

  return result;
};

const prices = [3,2,1,4];
console.log(getDescentPeriods(prices));
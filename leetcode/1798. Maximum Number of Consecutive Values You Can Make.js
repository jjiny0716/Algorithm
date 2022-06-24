/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function(coins) {
  coins.sort((a, b) => a - b);
  let cur = 0;
  for (let coin of coins) {
    if (cur + 1 >= coin) {
      cur += coin;
    }
    else break;
  }

  return cur + 1;
};

const coins = [1,4,10,3,1];
console.log(getMaximumConsecutive(coins));
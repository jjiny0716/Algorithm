/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function(coins, target) {
  coins.sort((a, b) => a - b);
  let cur = 0, ans = 0;
  for (const coin of coins) {
    while (coin > cur + 1) {
      ans++;
      cur += cur + 1;
      if (cur >= target) break;
    }
    
    if (coin <= cur + 1) {
      cur += coin;
    }
    if (cur >= target) break;
  }
  
  while (cur < target) {
    ans++;
    cur += cur + 1;
    if (cur >= target) break;
  }
  
  return ans;
};

const coins = [1, 1, 1], target = 20;
console.log(minimumAddedCoins(coins, target));
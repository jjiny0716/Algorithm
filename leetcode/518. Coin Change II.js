/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// 재귀: 중복된 조합 세는것 때문에 실패
// var change = function(amount, coins) {
//   const dp = {};
//   const helper = (remain) => {
//     if (dp[remain] !== undefined) return dp[remain];
//     if (remain === 0) return 1;
//     else if (remain < 0) return 0;

//     return dp[remain] = coins.reduce((count, coin) => {
//       if (coin > remain) return count;
//       return count + helper(remain - coin);
//     }, 0);
//   }

//   return helper(amount);
// };

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let i = 1 ; i <= amount ; i++) {
      dp[i] += dp[i - coin] ?? 0;
    }
  }

  return dp[amount];
};

const amount = 5, coins = [1,2,5];
console.log(change(amount, coins));
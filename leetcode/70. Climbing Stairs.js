/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = [1, 1];
  for (let i = 2 ; i <= n ; i++) {
    dp.push(dp[i - 2] + dp[i - 1]);
  }
  return dp[n];
};

console.log(climbStairs(45));
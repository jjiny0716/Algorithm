/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  const MOD = 10**9 + 7;
  const dp = new Array(high + 1);
  dp[zero] = 1
  dp[one] = (dp[one] ?? 0) + 1;

  let ans = 0;
  for (let i = 1 ; i <= high ; i++) {
    dp[i] = ((dp[i] ?? 0) + (dp[i - zero] ?? 0) + (dp[i - one] ?? 0)) % MOD;
    if (i >= low) ans = (ans + dp[i]) % MOD;
  }

  return ans;
};

const low = 5, high = 5, zero = 5, one = 2;
console.log(countGoodStrings(low, high, zero, one));

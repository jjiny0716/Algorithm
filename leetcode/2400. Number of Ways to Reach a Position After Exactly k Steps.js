/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function(startPos, endPos, k) {
  const MOD = 10 ** 9 + 7;
  const dp = {};
  const solve = (pos, k) => {
    if (dp[pos]?.[k] !== undefined) return dp[pos][k];
    if (k === 0) {
      if (pos === endPos) return 1;
      else return 0;
    }

    if (!dp[pos]) dp[pos] = {};
    return dp[pos][k] = (solve(pos - 1, k - 1) + solve(pos + 1, k - 1)) % MOD;
  }
  
  return solve(startPos, k);
};

const startPos = 1, endPos = 20, k = 19;
console.log(numberOfWays(startPos, endPos, k));
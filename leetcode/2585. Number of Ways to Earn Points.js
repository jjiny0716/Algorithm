/**
 * @param {number} target
 * @param {number[][]} types
 * @return {number}
 */
var waysToReachTarget = function(target, types) {
  const n = types.length;
  const MOD = 10 ** 9 + 7;
  const dp = Array.from({ length: target + 1 }, () => new Array(n + 1).fill(-1));

  const dfs = (target, index) => {
    if (target === 0) return 1;
    if (index >= types.length) return 0;
    if (target < 0) return 0;
    if (dp[target][index] !== -1) {
      return dp[target][index];
    }

    let result = 0;
    for (let i = 0 ; i <= types[index][0] ; i++) {
      result = (result + dfs(target - (types[index][1] * i), index + 1)) % MOD;
    }

    return dp[target][index] = result;
  }

  return dfs(target, 0);
};

const target = 6, types = [[6,1],[3,2],[2,3]];
console.log(waysToReachTarget(target, types));
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
  const MODULO = 10 ** 9 + 7;
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: n * k }));

  function getPossibleCombination(depth, sum) {
    if (sum > target) return 0;
    if (depth === n) {
      if (sum === target) return 1;
      return 0;
    }
    let result = 0;
    for (let i = 1; i <= k; i++) {
      const count = dp[depth + 1][sum + i] ?? getPossibleCombination(depth + 1, sum + i) % MODULO;
      dp[depth + 1][sum + i] = count % MODULO;
      result += count % MODULO;
    }
    return result;
  }

  return getPossibleCombination(0, 0) % MODULO;
};

const n = 30,
  k = 30,
  target = 500;
console.log(numRollsToTarget(n, k, target));

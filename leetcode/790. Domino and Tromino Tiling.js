/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
  if (n === 1) return 1;
  const dp = [1, 2];
  const MOD = 10 ** 9 + 7;
  while (dp.length !== n) {
    dp.push((dp.at(-1) * 2 + (dp.at(-3) || 1)) % MOD);
  }

  return dp.at(-1);
};

const n = 30;
console.log(numTilings(n));
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
  let powerOfTwo = 1;
  while (powerOfTwo * 2 <= n) powerOfTwo *= 2;

  const powers = [];
  while (n) {
    if (powerOfTwo <= n) {
      n -= powerOfTwo;
      powers.push(powerOfTwo);
    }
    powerOfTwo /= 2;
  } 
  powers.reverse();

  const prefixProducts = [];
  for (const p of powers) {
    prefixProducts.push(p * (prefixProducts.at(-1) ?? 1));
  }

  const MOD = 10 ** 9 + 7;
  return queries.map(([s, e]) => prefixProducts[e] / (prefixProducts[s - 1] ?? 1) % MOD);
};

const n = 15, queries = [[0,1],[2,2],[0,3]];
console.log(productQueries(n, queries));
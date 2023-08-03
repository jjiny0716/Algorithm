/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
  const MOD = 10 ** 9 + 7;
  let bitLength = 1;
  let ans = 0;
  for (let i = 1 ; i <= n ; i++) {
    bitLength = Math.floor(Math.log2(i)) + 1;
    ans = (((ans * 2 ** bitLength) % MOD) + i) % MOD;
  }

  return ans;
};

const n = 12;
console.log(concatenatedBinary(n));

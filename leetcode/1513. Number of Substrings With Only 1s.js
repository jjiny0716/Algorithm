/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
  const MOD = 10 ** 9 + 7;
  let result = 0;
  let count = 0;

  for (let c of s) {
    count = c === '0' ? 0 : count + 1;
    result = (result + count) % MOD;
  }

  return result;
};

const s = "0110111";
console.log(numSub(s));

/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
  const result = [];

  for (let i = 1 ; i < n ; i++) {
    for (let j = i + 1 ; j <= n ; j++) {
      if (gcd(i, j) !== 1) continue;
      result.push(`${i}/${j}`);
    }
  }

  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }

  return result;
};

const n = 4;
console.log(simplifiedFractions(n));
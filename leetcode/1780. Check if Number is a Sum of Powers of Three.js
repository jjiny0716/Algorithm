/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
  let power = 1;
  while (power * 3 <= n) power *= 3;
  while (n > 0 && power !== 0) {
    if (power <= n) n -= power;
    power /= 3;
  }

  return n === 0;
};

const n = 21;
console.log(checkPowersOfThree(n));
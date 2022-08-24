/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
  const result = [];

  while (n) {
    result.push(n % k);
    n = Math.floor(n / k);
  }

  return result.reduce((prev, cur) => prev + cur);
};

const n = 34, k = 6;
console.log(sumBase(n, k));
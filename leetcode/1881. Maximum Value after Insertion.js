/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function(n, x) {
  const isNegative = n[0] === '-';
  let i = isNegative ? 1 : 0;
  while ((isNegative && n[i] <= x) || (!isNegative && n[i] >= x)) {
    i++;
  }

  return n.slice(0, i) + x + n.slice(i, n.length);
};

const n = "1221", x = 2;
console.log(maxValue(n, x));
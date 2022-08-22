/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(n) {
  if (n === 0) return "0";
  let result = "";
  while (n) {
    const bit = n % -2;
    result = (bit === -1 ? 1 : bit) + result;
    n = n / -2 < 0 ? Math.ceil(n / -2) : Math.floor(n / -2);
  }

  return result;
};

console.log(baseNeg2(9));
// console.log((-1 / -2).toFixed(0));
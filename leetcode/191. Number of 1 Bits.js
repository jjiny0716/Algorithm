/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n.toString(2).padStart(32, "0").split('').filter(char => char === "1").length;
};

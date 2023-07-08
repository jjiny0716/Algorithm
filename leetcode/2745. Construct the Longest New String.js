/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function(x, y, z) {
  return (x === y ? 4 * x : Math.min(x, y) * 4 + 2) + 2 * z;
};

/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
  return (n * 2 - 1) ** 2 - ((n - 1) * n / 2) * 4;
};
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const temp = [...heights];
  return heights.sort((a, b) => a - b).reduce((sum, cur, i) => sum += temp[i] !== cur ? 1 : 0, 0);
};
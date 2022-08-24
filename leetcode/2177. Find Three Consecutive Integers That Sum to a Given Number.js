/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
  const x = num / 3
  if (!Number.isInteger(x)) return [];
  return [x - 1, x, x + 1];
};
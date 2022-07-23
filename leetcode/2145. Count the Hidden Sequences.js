/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
  let pSum = 0;
  let min = 0, max = 0;
  for (let diff of differences) {
    pSum += diff;
    min = Math.min(min, pSum);
    max = Math.max(max, pSum);
  }

  return upper - lower < max - min ? 0 : upper - lower - (max - min) + 1;
};

const differences = [-40], lower = -46, upper = 53;
console.log(numberOfArrays(differences, lower, upper));
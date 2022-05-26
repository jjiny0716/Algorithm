/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
  let total = 0, sum = 0, max = 0;
  let lastChar = colors[0], i = 0;

  while (i < colors.length) {
    while (colors[i] === lastChar) {
      sum += neededTime[i];
      max = Math.max(max, neededTime[i]);
      i++;
    }
    total += sum - max;
    sum = max = 0;
    lastChar = colors[i];
  }

  return total;
};

const colors = "abc", neededTime = [1,2,3];
console.log(minCost(colors, neededTime));
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
  const monotonicStack = [];
  const result = Array.from({ length: heights.length }, () => 0);
  
  for (let i = heights.length - 1 ; i >= 0 ; i--) {
    while (monotonicStack.length && monotonicStack.at(-1) < heights[i]) {
      monotonicStack.pop();
      result[i]++;
    }
    if (monotonicStack.length) result[i]++;
    monotonicStack.push(heights[i]);
  }

  return result;
};

const heights = [10,6,8,5,11,9];
console.log(canSeePersonsCount(heights));
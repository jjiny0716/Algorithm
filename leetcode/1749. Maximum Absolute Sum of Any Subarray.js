/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
  let max = 0, min = 0;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    max = Math.max(max, sum);
    if (sum < 0) sum = 0;
  }

  sum = 0;
  for (const num of nums) {
    sum += num;
    min = Math.min(min, sum);
    if (sum > 0) sum = 0;
  }

  return Math.max(Math.abs(max), Math.abs(min));
};

const nums = [2,-5,1,-4,3,-2];
console.log(maxAbsoluteSum(nums));
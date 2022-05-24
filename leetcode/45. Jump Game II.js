/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length === 1) return 0;

  let i = 0, result = 1;
  while (i + nums[i] < nums.length - 1) {
    let bestIndex, bestLength = 0;
    for (let j = 1 ; j <= nums[i] ; j++) {
      if (bestLength < nums[i + j] + j) {
        bestLength = nums[i + j] + j;
        bestIndex = i + j;
      }
    }
    i = bestIndex;
    result++;
  }

  return result;
};

const nums = [2,3,1,1,4];
console.log(jump(nums));
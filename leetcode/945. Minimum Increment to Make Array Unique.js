/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
  nums.sort((a, b) => a - b);
  let result = 0;

  for (let i = 1 ; i < nums.length ; i++) {
    if (nums[i - 1] >= nums[i]) {
      result += nums[i - 1] - nums[i] + 1;
      nums[i] = nums[i - 1] + 1;
    }
  }

  return result;
};

const nums = [3,2,1,2,1,7];
console.log(minIncrementForUnique(nums));
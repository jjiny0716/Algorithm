/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function(nums) {
  if (nums.length === 1) return nums[0];

  let result = 0;
  for (let i = nums.length - 2 ; i >= 0 ; i--) {
    if (nums[i] <= nums[i + 1]) {
      nums[i] += nums[i + 1];
      nums.pop();
    }
    result = Math.max(result, nums[i]);
  }

  return result;
};

const nums = [2,3,7,9,3];
console.log(maxArrayValue(nums));
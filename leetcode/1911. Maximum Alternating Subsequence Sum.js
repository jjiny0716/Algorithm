/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
  let alternatingSum = 0;
  let odd = false;
  for (let i = 0 ; i < nums.length ; i++) {
    if (!odd && (nums[i - 1] || 0) <= nums[i] && nums[i] >= (nums[i + 1] || 0)) {
      alternatingSum += nums[i];
      odd = true;
    }
    else if (odd && nums[i - 1] >= nums[i] && nums[i] <= (nums[i + 1] || 0)) {
      alternatingSum -= nums[i];
      odd = false;
    }
  }

  return alternatingSum;
};

const nums = [7, 1, 1, 2, 4];
console.log(maxAlternatingSum(nums));
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let result = 0, sum = 0;

  for (let i = 0 ; i < nums.length ; i++) {
    if ((nums[i - 1] || 0) >= nums[i]) sum = 0;
    sum += nums[i];
    result = Math.max(result, sum);
  }

  return result;
};

const nums = [12,17,15,13,10,11,12];
console.log(maxAscendingSum(nums));
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) return nums[0];
  const dp1 = new Array(nums.length - 1);
  const dp2 = new Array(nums.length - 1);

  for (let i = 0 ; i < nums.length - 1 ; i++) {
    dp1[i] = Math.max(dp1[i - 3] || 0, dp1[i - 2] || 0) + nums[i];
    dp2[i] = Math.max(dp2[i - 3] || 0, dp2[i - 2] || 0) + nums[i + 1];
  }

  return Math.max(...dp1, ...dp2);
};

const nums = [1];
console.log(rob(nums));
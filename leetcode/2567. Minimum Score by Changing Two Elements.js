/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function (nums) {
  nums.sort((a, b) => a - b);
  return Math.min(
    Math.abs(nums.at(-1) - nums[2]),
    Math.abs(nums.at(-2) - nums[1]),
    Math.abs(nums.at(-3) - nums[0])
  );
};

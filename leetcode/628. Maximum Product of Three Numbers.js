/**
 * @param {number[]} nums
 * @return {number}
 */
// 경우의 수 2가지 (+++, +--)
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b);
  return Math.max(nums[0] * nums[1] * nums.at(-1), nums.at(-1) * nums.at(-2) * nums.at(-3));
};

const nums = [-100,-98,-50,2,3,4];
console.log(maximumProduct(nums));
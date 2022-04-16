/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
  let totalMax = -1, leftMax = Number.MAX_SAFE_INTEGER, result = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    if (nums[i] > totalMax) totalMax = nums[i];
    if (nums[i] < leftMax) {
      leftMax = totalMax;
      result = i + 1;
    }
  }
  return result;
};

const nums = [1,1,1,0,6,12];
console.log(partitionDisjoint(nums));
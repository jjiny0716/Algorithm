/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      count++;
      if (count === 2) return false;

      if (i >= 2 && nums[i - 2] >= nums[i]) nums[i] = nums[i - 1];
    }
  }

  return count < 2;
};

const nums = [1, 2, 10, 11, 7, 8];
console.log(canBeIncreasing(nums));

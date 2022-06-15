/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  let i;
  for (i = 0 ; i < nums.length - 1 ; i++) {
    if (nums[i] < nums[i + 1]) break;
  }
  if (i === nums.length - 1) return true;

  for (i = 0 ; i < nums.length - 1 ; i++) {
    if (nums[i] > nums[i + 1]) break;
  }
  if (i === nums.length - 1) return true;

  return false;
};  
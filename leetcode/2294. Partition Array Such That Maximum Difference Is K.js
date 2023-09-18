/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
  nums.sort((a, b) => a - b);
  let ans = 0;

  let last = nums[0];
  for (const n of nums) {
    if (n - last > k) {
      ans++;
      last = n;
    }
  }

  return ans + 1;
};
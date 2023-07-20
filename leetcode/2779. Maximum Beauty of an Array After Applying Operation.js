/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
  nums.sort((a, b) => a - b);
  let right = 0, maxBeauty = 1;

  for (let left = 0 ; left < nums.length ; left++) {
    while ((nums[right + 1] <= nums[left] + k * 2) && (right < nums.length)) right++;
    maxBeauty = Math.max(maxBeauty, right - left + 1);
  }

  return maxBeauty;
};

const nums = [1, 2, 4, 6], k = 2;
console.log(maximumBeauty(nums, k));

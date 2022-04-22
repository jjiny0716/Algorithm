/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  const n = nums.length;
  const window = [];
  let i = 0, j = 0, max = nums[0], min = nums[0];
  let result = 0;
  while (j < n) {
    // grow
    while (max - min <= limit && j < n) {
      result = Math.max(result, window.length);
      const num = nums[j++];
      window.push(num);
      max = Math.max(max, num);
      min = Math.min(min, num); 
    }

    if (j > n) break;

    // shrink
    while (max - min > limit) {
      const num = window.shift();
      if (num === max) max = Math.max(...window);
      if (num === min) min = Math.min(...window); 
    }
  }

  return Math.max(result, window.length);
};

const nums = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], limit = 10;
console.log(longestSubarray(nums, limit));
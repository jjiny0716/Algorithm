/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  const maxDeque = [];
  const minDeque = [];

  let l = 0, result = 0;
  for (let r = 0 ; r < nums.length ; r++) {
    while (maxDeque.length && maxDeque[maxDeque.length - 1] < nums[r]) maxDeque.pop();
    while (minDeque.length && minDeque[minDeque.length - 1] > nums[r]) minDeque.pop();
    maxDeque.push(nums[r]);
    minDeque.push(nums[r]);

    while (maxDeque[0] - minDeque[0] > limit) {
      if (nums[l] === maxDeque[0]) maxDeque.shift();
      if (nums[l] === minDeque[0]) minDeque.shift();
      l++;
    }

    result = Math.max(result, r - l + 1);
  }

  return result;
};

const nums = [10,1,2,4,7,2], limit = 5;
console.log(longestSubarray(nums, limit));

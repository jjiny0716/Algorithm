/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  let s = 0, zeroCount = 0, result = 0;
  for (let e = 0 ; e < nums.length ; e++) {
    if (nums[e] === 0) zeroCount++;
    if (zeroCount > 1) {
      if (nums[s] === 0) zeroCount--;
      s++;
    }

    result = Math.max(result, e - s);
  }

  return result;
};

const nums = [0,1,1,1,0,1,1,0,1];
console.log(longestSubarray(nums));
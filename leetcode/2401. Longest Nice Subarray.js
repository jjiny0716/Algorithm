/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  let currentBits = 0,
    j = 0,
    longestLength = 0;
  for (let i = 0; i < nums.length; i++) {
    while ((currentBits & nums[i]) !== 0) {
      currentBits ^= nums[j];
      j++;
    }
    currentBits |= nums[i];
    longestLength = Math.max(longestLength, i - j + 1);
  }

  return longestLength;
};

const nums = [1, 3, 8, 48, 10];
console.log(longestNiceSubarray(nums));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let max = 0;
  let i = 0;
  let j = -1;
  let zeroCount = 0;
  const n = nums.length;
  while (j < n) {
    max = Math.max(max, j - i + 1);
    if (zeroCount + (nums[j + 1] === 0 ? 1 : 0) <= k) zeroCount += nums[++j] === 0 ? 1 : 0;
    else zeroCount -= nums[i++] === 0 ? 1 : 0;
  }

  return max;
};

const nums = [1],
  k = 2;

// 개선
var longestOnes2 = function (nums, k) {
  let i = 0, j;
  for (j = 0 ; j < nums.length ; j++) {
    if (nums[j] === 0) k--;
    if (k < 0 && nums[i++] === 0) k++;
  }
  return j - i;
};

console.log(longestOnes2(nums, k));
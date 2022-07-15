/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let last = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (i - last - 1 < k) return false;
      last = i;
    }
  }

  return true;
};

const nums = [1, 0, 0, 0, 1, 0, 0, 1],
  k = 2;
console.log(kLengthApart(nums, k));

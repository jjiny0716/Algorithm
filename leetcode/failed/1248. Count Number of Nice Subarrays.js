/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let l = 0,
    r = -1,
    oddCount = 0,
    streak = 0;
  let result = 0;
  while (r < nums.length) {
    r++;
    if (r === nums.length) break;
    if (nums[r] % 2 === 1) oddCount++;

    if (oddCount === k) {
      streak++;
      result += streak;
    }

    while (oddCount > k) {
      if (nums[l] % 2 === 1) oddCount--;
      streak--;
      result += streak;
      l++;
    }
  }

  while (oddCount >= k) {
    if (nums[l] % 2 === 1) oddCount--;
    streak--;
    result += streak;
    l++;
  }

  return result;
};

const nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2],
  k = 2;
console.log(numberOfSubarrays(nums, k));

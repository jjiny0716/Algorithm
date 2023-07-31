/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  const count = new Set(nums).size;
  const n = nums.length;
  let result = (n * (n + 1)) / 2;
  let right = -1;
  const map = new Map();
  for (let left = 0; left < n; left++) {
    while (right < n - 1 && map.size < count) {
      right++;
      map.set(nums[right], (map.get(nums[right]) || 0) + 1);
      result -= right - left;
    }

    if (right === n - 1 && map.size < count) {
      result -= right - left + 1;
      break;
    }

    map.set(nums[left], map.get(nums[left]) - 1);
    if (map.get(nums[left]) === 0) map.delete(nums[left]);
  }

  return result;
};

const nums = [1, 3, 1, 2, 2];
console.log(countCompleteSubarrays(nums));

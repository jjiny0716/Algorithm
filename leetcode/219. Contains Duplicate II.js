/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = {};
  for (let i = 0 ; i <= k && i < nums.length ; i++) {
    if (map[nums[i]]) return true;
    map[nums[i]] = true;
  }

  for (let i = k + 1 ; i < nums.length ; i++) {
    map[nums[i - k - 1]] = false;
    if (map[nums[i]]) return true;
    map[nums[i]] = true;
  }

  return false;
};

const nums = [1,2,3,4,5,6,7,8,9,10], k = 15;
console.log(containsNearbyDuplicate(nums, k));
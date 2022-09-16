/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
  const n = nums.length;
  const map = {};
  let result = n * (n - 1) / 2;
  for (let i = 0 ; i < n ; i++) {
    result -= map[i - nums[i]] || 0;
    map[i - nums[i]] = (map[i - nums[i]] || 0) + 1;
  }

  return result;
};

const nums = [4,1,3,3];
console.log(countBadPairs(nums));
/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function(nums) {
  const map = new Map();

  for (const num of nums) {
    for (let i = 0 ; i < 2 ** 16 ; i++) {
      if ((num & i) === 0) map.set(i, (map.get(i) || 0) + 1);
    }
  }

  let result = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    for (let j = 0 ; j < nums.length ; j++) {
      if ((nums[i] & nums[j]) === 0) result += nums.length;
      else if (map.has(nums[i] & nums[j])) result += map.get(nums[i] & nums[j]);
    }
  }

  return result;
};

const nums = [2,4,7,3];
console.log(countTriplets(nums));
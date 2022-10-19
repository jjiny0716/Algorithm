/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  const set = new Set();
  let result = -1;
  for (const num of nums) {
    set.add(num);
    if (set.has(-num)) result = Math.max(result, Math.abs(num));
  }

  return result;
};

const nums = [-1, 10, 6, 7, -7, 1];
console.log(findMaxK(nums));

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
  const set = new Set();
  let result = 0;
  for (const n of nums) {
    if (set.has(n - diff * 2) && set.has(n - diff)) result++;
    set.add(n);
  }

  return result;
};

const nums = [0,1,4,6,7,10], diff = 3;
console.log(arithmeticTriplets(nums, diff));
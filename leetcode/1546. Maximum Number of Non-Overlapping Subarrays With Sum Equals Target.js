/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function(nums, target) {
  const set = new Set();
  set.add(0);
  let pSum = 0, result = 0;
  for (let num of nums) {
    pSum += num;
    if (set.has(pSum - target)) {
      result++;
      set.clear();
      set.add(0);
      pSum = 0;
    }
    else set.add(pSum);
  }

  return result;
};

const nums = [-1,3,5,1,4,2,-9], target = 6;
console.log(maxNonOverlapping(nums, target));
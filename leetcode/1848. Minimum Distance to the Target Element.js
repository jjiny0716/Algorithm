/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
  let index = -1, abs = Infinity;
  for (let i = 0 ; i < nums.length ; i++) {
    if (nums[i] === target && Math.abs(i - start) < abs) {
      
      index = i;
      abs = Math.abs(i - start);
    }
  }

  return abs;
};

const nums = [1,2,3,4,5], target = 5, start = 3;
console.log(getMinDistance(nums, target, start));
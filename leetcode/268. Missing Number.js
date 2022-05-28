/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  return nums.length * (nums.length + 1) / 2 - nums.reduce((sum, num) => sum += num, 0);
};

const nums = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(nums));
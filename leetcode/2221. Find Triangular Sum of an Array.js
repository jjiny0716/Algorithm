/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
  while (nums.length > 1) {
    const newNums = [];
    for (let i = 0 ; i < nums.length - 1 ; i++) {
      newNums.push((nums[i] + nums[i + 1]) % 10);
    }
    nums = newNums;
  }

  return nums[0];
};

const nums = [1,2,3,4,5];
console.log(triangularSum(nums));
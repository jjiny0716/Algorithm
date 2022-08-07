/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
  nums.sort((a, b) => b - a);
  let largest = nums[0], result = 0;
  for (let i = 1 ; i < nums.length ; i++) {
    if (nums[i] < largest) {
      result += i;
      largest = nums[i];
    }
  }

  return result;
};

const nums = [1,1,2,2,3];
console.log(reductionOperations(nums));
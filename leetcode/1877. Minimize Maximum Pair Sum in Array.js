/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  let max = 0;
  let i, j = nums.length - 1;
  for (i = 0 ; i < nums.length / 2 ; i++) {
    max = Math.max(max, nums[i] + nums[j]);
    j--;
  }

  return max;
};

const nums = [3,5,4,2,4,6];
console.log(minPairSum(nums));
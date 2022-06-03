/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  nums.sort((a, b) => a - b);
  for (let i = 0 ; i < nums.length && nums[i] < 0 && k > 0 ; i++) {
    nums[i] *= -1;
    k--;
  }

  // 그냥 Math.min을 이용하지..
  if (k % 2 === 1) {
    nums.sort((a, b) => a - b);
    nums[0] *= -1;
  }

  return nums.reduce((sum, num) => sum + num, 0);
};

const nums = [2,-3,-1,5,-4], k = 2;
console.log(largestSumAfterKNegations(nums, k));
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((prev, cur) => prev + cur);
  if (sum % 2 === 1) return false;

  const dp = new Array(sum + 1).fill(0);
  const makeAllSum = (lastIndex = -1, sum = 0) => {
    if (dp[sum] && dp[sum] < lastIndex) return;
    dp[sum] = lastIndex;
    for (let i = lastIndex + 1 ; i < nums.length ; i++) {
      makeAllSum(i, sum + nums[i]);
    }
  }
  makeAllSum();

  return !!dp[sum / 2];
};

const nums = [20,1,16,2,17,16,8,15,7];
console.log(canPartition(nums));
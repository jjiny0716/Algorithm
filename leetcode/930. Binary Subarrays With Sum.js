/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  const pSumCount = {0: 1};
  let pSum = 0;

  let result = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    pSum += nums[i];
    result += pSumCount[pSum - goal] || 0;
    pSumCount[pSum] = (pSumCount[pSum] || 0) + 1;
  }
  
  return result;
};

const nums = [0,0,0,0,0], goal = 0;
console.log(numSubarraysWithSum(nums, goal));

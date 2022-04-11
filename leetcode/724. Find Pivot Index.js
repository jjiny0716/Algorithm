/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((sum, n) => sum += n, 0);
  let pSum = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    if (pSum === sum - pSum - nums[i]) return i;
    pSum += nums[i];
  }
  return -1;
};

const nums = [-1,-1,-1,-1,-1,0];
console.log(pivotIndex(nums));
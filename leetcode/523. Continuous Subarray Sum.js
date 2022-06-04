/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  const pSum = [0];
  for (let num of nums) {
    pSum.push(pSum.at(-1) + num);
    pSum[pSum.length - 1] = pSum[pSum.length - 1] % k;
  }
  
  const pSumSet = new Set();
  for (let i = 2 ; i < pSum.length ; i++) {
    pSumSet.add(pSum[i - 2]);
    if (pSumSet.has(pSum[i])) return true;
  }

  return false;
};
  
const nums = [23,2,6,4,7], k = 6;
console.log(checkSubarraySum(nums, k));
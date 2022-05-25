/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let result = 0;
  let pSum = 0;
  const pSumMap = new Map().set(0, 1);

  for (let num of nums) {
    pSum += num;
    result += pSumMap.get(pSum - k) || 0;
    pSumMap.set(pSum, (pSumMap[pSum] || 0) + 1);
  }

  return result;
};

const nums = [1,1,1], k = 2;
console.log(subarraySum(nums, k));
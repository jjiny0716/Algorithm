/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const countMap = {}, firstIndexMap = {};

  const countMapForMax = {};
  let max = 0;
  for (let num of nums) {
    countMapForMax[num] = (countMapForMax[num] || 0) + 1;
    max = Math.max(max, countMapForMax[num]);
  }

  let result = Infinity;
  for (let i = 0 ; i < nums.length ; i++) {
    if (firstIndexMap[nums[i]] === undefined) firstIndexMap[nums[i]] = i;
    countMap[nums[i]] = (countMap[nums[i]] || 0) + 1;
    if (countMap[nums[i]] === max) {
      result = Math.min(result, i - firstIndexMap[nums[i]] + 1);
    }
  }

  return result;
};

const nums = [3,3,4];
console.log(findShortestSubArray(nums));
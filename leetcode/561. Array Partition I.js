/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  return nums.sort((a, b) => a - b).reduce((prev, cur, i) => prev += i % 2 === 0 ? cur : 0, 0);
};
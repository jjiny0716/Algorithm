/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  return nums.reduce((pSum, num) => {
    pSum.push((pSum.at(-1) || 0) + num);
    return pSum;
  }, []);
};
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
  let evenSum = nums.reduce((sum, num) => sum += num % 2 === 0 ? num : 0, 0);
  const result = [];

  for (let [val, index] of queries) {
    if (nums[index] % 2 === 0) evenSum -= nums[index];
    nums[index] += val;
    if (nums[index] % 2 === 0) evenSum += nums[index];
    result.push(evenSum);
  }

  return result;
};

const nums = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]];
console.log(sumEvenAfterQueries(nums, queries));
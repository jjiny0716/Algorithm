/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// brute force O(2^n)
var findTargetSumWays = function(nums, target) {
  let result = 0;
  function findAll(i, total) {
    if (i === nums.length) {
      if (total === target) result++;
      return;
    }

    findAll(i + 1, total + nums[i]);
    findAll(i + 1, total - nums[i]);
  }
  findAll(0, 0);

  return result;
};

// backtracking
var findTargetSumWays2 = function(nums, target) {
  const sum = nums.reduce((sum, num) => sum += num, 0);
  const pSum = [0];
  for (let num of nums) {
    pSum.push(pSum.at(-1) + num);
  }
  let result = 0;
  function findAll(i, total) {
    if (i === nums.length) {
      if (total === target) result++;
      return;
    }
    if (Math.abs(total - target) > sum - pSum[i]) return;

    findAll(i + 1, total + nums[i]);
    findAll(i + 1, total - nums[i]);
  }
  findAll(0, 0);

  return result;
};

const nums = [1,1,1,1,1], target = 3;
console.log(findTargetSumWays2(nums, target));
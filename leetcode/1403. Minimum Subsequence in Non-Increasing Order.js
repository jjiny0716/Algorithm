/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  const total = nums.reduce((prev, cur) => prev + cur, 0);
  nums.sort((a, b) => b - a);
  
  const result = [];
  let sum = 0;
  for (let num of nums) {
    sum += num;
    result.push(num);
    if (sum * 2 > total) break;
  }

  return result;
};

const nums = [4,3,10,9,8];
console.log(minSubsequence(nums));
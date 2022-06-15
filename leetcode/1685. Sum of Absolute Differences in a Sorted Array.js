/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  const pSum = [0];
  for (let num of nums) {
    pSum.push(pSum.at(-1) + num);
  }

  const result = [];
  for (let i = 0 ; i < nums.length ; i++) {
    const left = (nums[i] * i) - pSum[i];
    const right = pSum.at(-1) - pSum[i + 1] - ((pSum.length - i - 2) * nums[i]);
    result.push(left + right);
  }

  return result;
};

const nums = [1,4,6,8,10];
console.log(getSumAbsoluteDifferences(nums));
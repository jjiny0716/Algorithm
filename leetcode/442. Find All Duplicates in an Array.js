/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const result = [];

  for (let num of nums) {
    const index = Math.abs(num) - 1;
    if (nums[index] < 0) result.push(index + 1);
    nums[index] *= -1;
  }

  return result;
};

const nums = [4,3,2,7,8,2,3,1];
console.log(findDuplicates(nums));
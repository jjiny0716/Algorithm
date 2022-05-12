/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const diffArr = [];
  for (let i = 0 ; i < nums.length - 1 ; i++) {
    diffArr.push(nums[i] - nums[i + 1]);
  }

  let curLength = 0, result = 0;
  for (let i = 1 ; i < diffArr.length ; i++) {
    if (diffArr[i - 1] === diffArr[i]) {
      curLength++;
      result += curLength;
    }
    else curLength = 0;
  }

  return result;
};

const nums = [1,2,3,4];
console.log(numberOfArithmeticSlices(nums));
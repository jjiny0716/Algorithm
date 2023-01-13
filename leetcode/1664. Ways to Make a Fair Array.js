/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
  let leftOddIndexSum = 0, leftEvenIndexSum = 0, rightOddIndexSum = 0, rightEvenIndexSum = 0;

  for (let  i = 0 ; i < nums.length ; i++) {
    if (i % 2 === 1) rightEvenIndexSum += nums[i];
    else rightOddIndexSum += nums[i];
  }

  let result = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    if (i % 2 === 0) {
      rightOddIndexSum -= nums[i];
      if (i !== 0) leftOddIndexSum += nums[i - 1];
    }
    else {
      rightEvenIndexSum -= nums[i];
      if (i !== 0) leftEvenIndexSum  += nums[i - 1];
    }
    if (leftOddIndexSum + rightOddIndexSum === leftEvenIndexSum + rightEvenIndexSum) result++;
  }

  return result;
};

const nums = [2,1,6,4];
console.log(waysToMakeFair(nums));

// 1 6 4
// 2 6 4
// 2 1 4
// 2 1 6
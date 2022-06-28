/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let subArraySum = 0;
  for (let i = 0 ; i < k ; i++) subArraySum += nums[i];
  let result = subArraySum / k;
  for (let i = k ; i < nums.length ; i++) {
    subArraySum -= nums[i - k];
    subArraySum += nums[i];
    result = Math.max(result, subArraySum / k);
  }

  return result;
};

const nums = [1,12,-5,-6,50,3], k = 4;
console.log(findMaxAverage(nums, k));
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var goodIndices = function(nums, k) {
  const increaseCount = [1];
  const decreaseCount = [1];

  for (let i = 1 ; i < nums.length ; i++) {
    if (nums[i - 1] >= nums[i]) increaseCount.push(increaseCount.at(-1) + 1);
    else increaseCount.push(1);

    if (nums[i - 1] <= nums[i]) decreaseCount.push(decreaseCount.at(-1) + 1);
    else decreaseCount.push(1);
  }

  const result = [];
  for (let i = k ; i < nums.length - k ; i++) {
    if (increaseCount[i - 1] >= k && decreaseCount[i + k] >= k) result.push(i);
  }

  return result;
}; 

const nums = [2,1,1,1,3,4,1], k = 2;
console.log(goodIndices(nums, k));
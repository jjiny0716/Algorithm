/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function(nums) {
  nums.sort((a, b) => a - b);
  const midIndex = Math.floor(nums.length / 2)
  let result = 0, i = 0, j = midIndex;

  for (let i = 0 ; i < midIndex ; i++) {
    while (2 * nums[i] > nums[j]) j++;
    if (nums[j] === undefined) break;
    result += 2;
    j++;
  }

  return result;
};

const nums = [3,5,2,4];
console.log(maxNumOfMarkedIndices(nums));

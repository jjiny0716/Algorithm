/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function(nums) {
  let i = 0, result = 0;
  for (const n of nums.sort((a, b) => a - b)) {
    if (n > nums[i]) {
      i++;
      result++;
    }
  }

  return result;
};

const nums = [1,3,5,2,1,3,1];
console.log(maximizeGreatness(nums));

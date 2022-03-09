/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) return nums.length;
  let direction = 0;
  let count = 0;
  for (let i = 1 ; i < nums.length ; i++) {
    if (nums[i - 1] < nums[i]) {
      if (direction !== 1) count++;
      direction = 1;
    }
    else if (nums[i - 1] > nums[i]) {
      if (direction !== -1) count++;
      direction = -1;
    }
  }
  return count + 1;
};

const nums = [1,7,4,9,2,5];
console.log(wiggleMaxLength(nums));

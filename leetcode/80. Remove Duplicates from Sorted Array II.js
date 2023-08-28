/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let index = 0;
  for (const e of nums) {
    if (index < 2 || e !== nums[index - 2]) {
      nums[index++] = e;
    }
  }

  return index;
};

const nums = [0,0,1,1,1,1,2,3,3];
console.log(removeDuplicates(nums));
console.log(nums);
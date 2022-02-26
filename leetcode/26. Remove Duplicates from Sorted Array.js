/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let index = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index++] = nums[i];
    }
  }

  return index;
};

nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));

for (let i = index ; i < nums.length ; i++) {
  nums[index] = '_';
}
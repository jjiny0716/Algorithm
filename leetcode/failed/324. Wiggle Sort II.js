/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  let l = sorted.length / 2, r = sorted.length - 1;
  for (let i = 0 ; i < nums.length ; i += 2) {
    nums[i] = sorted[l--];
    nums[i + 1] = sorted[r--];
  }
};

const nums = [1,5,1,1,6,4];
console.log(wiggleSort(nums));
console.log(nums);
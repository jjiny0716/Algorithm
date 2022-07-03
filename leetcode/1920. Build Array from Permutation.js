/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  const result = new Array(nums.length);
  for (let i = 0 ; i < nums.length ; i++) {
    result[i] = nums[nums[i]];
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(1) space
var buildArray2 = function(nums) {
  const n = nums.length;
  for (let i = 0 ; i < n ; i++) {
    nums[i] += n * (nums[nums[i]] % 6);
  }

  for (let i = 0 ; i < n ; i++) {
    nums[i] = Math.floor(nums[i] / n);
  }

  return nums;
};

const nums = [5,0,1,2,3,4];
console.log(buildArray2(nums));
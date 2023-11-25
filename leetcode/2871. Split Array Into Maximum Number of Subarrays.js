/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarrays = function (nums) {
  const and = nums.reduce((prev, cur) => prev & cur, nums[0]);
  if (and >= 1) return 1;
  
  let curAnd = nums[0];
  let ans = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    curAnd &= nums[i];
    if (curAnd === 0) {
      ans++;
      curAnd = nums[i + 1];
    }
  }
  
  return ans;
};

const nums = [1, 0, 2, 0, 1, 1];
console.log(maxSubarrays(nums));

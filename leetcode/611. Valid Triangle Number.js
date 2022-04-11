/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = nums.length - 1 ; i >= 2 ; i--) {
    let l = 0, r = i - 1;
    while (l < r) {
      if (nums[l] + nums[r] > nums[i]) {
        result += r - l;
        r--;
      }
      else {
        l++;
      }
    }
  }
  return result;
};

const nums = [1, 2, 3, 4, 5, 6];
console.log(triangleNumber(nums));
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// sort
var sortColors = function (nums) {
  nums.sort((a, b) => a - b);
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// two pass
var sortColors = function (nums) {
  const count = [0, 0, 0];
  for (let num of nums) {
    count[num]++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (count[0]) {
      count[0]--;
      nums[i] = 0;
    } else if (count[1]) {
      count[1]--;
      nums[i] = 1;
    } else if (count[2]) {
      count[2]--;
      nums[i] = 2;
    }
  }
};

// https://leetcode.com/problems/sort-colors/discuss/273597/java-0ms-two-pointer-solution-with-detailed-explanation

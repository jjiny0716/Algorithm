/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  if (nums[0] >= 0) return nums.map((num) => num ** 2);
  const result = [];

  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    if (Math.abs(nums[l]) > Math.abs(nums[r])) result.push(nums[l++] ** 2);
    else result.push(nums[r--] ** 2);
  }

  return result.reverse();
};
const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));

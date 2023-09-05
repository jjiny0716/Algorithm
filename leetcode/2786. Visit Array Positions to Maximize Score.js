/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var maxScore = function (nums, x) {
  let even = nums[0] % 2 ? -10000000 : 0, odd = nums[0] % 2 ? 0 : -10000000;

  for (const n of nums) {
    if (n % 2 === 0) even = n + Math.max(even, odd - x);
    else odd = n + Math.max(even - x, odd);
  }

  return Math.max(even, odd);
};

const nums = [8,50,65,85,8,73,55,50,29,95,5,68,52,79],
  x = 74;
console.log(maxScore(nums, x));
// 2,3,6,1,9,2
// 2,3
// 2,3,8
// 2,3,8,4
// 2,3,8,4,13
// 2,3,8,4,13,10
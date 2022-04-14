/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const targetNum = nums[Math.floor(n / 2)];
  return nums.reduce((prev, cur) => prev += Math.abs(cur - targetNum), 0);
};

const nums = [1,10,2,9];
console.log(minMoves2(nums));

// why????????
// 왜 평균이 아니라 중앙값을 선택해야할까.
// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/discuss/94937/Java(just-like-meeting-point-problem)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;

  const front = nums.splice(0, nums.length - k);
  for (let n of front)
    nums.push(n);
};

nums = [1,2,3,4,5,6,7], k = 3
console.log(rotate(nums, k));

console.log(nums);
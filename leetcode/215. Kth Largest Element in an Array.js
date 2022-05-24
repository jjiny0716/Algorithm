/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// sort
var findKthLargest = function(nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};

// quick select 알고리즘으로도 해결 가능 O(n)
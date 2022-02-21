/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let k = m + n - 1;
  m--;
  n--;

  // nums2 다쓰면 끝
  while (n >= 0) {
    nums1[k--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};
nums1 = [0], m = 0, nums2 = [1], n = 1
console.log(merge(nums1, m, nums2, n));

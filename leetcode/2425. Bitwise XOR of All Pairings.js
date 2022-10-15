/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
  const nums1Xor = nums2.length % 2 === 0 ? 0 : nums1.reduce((prev, cur) => prev ^ cur);
  const nums2Xor = nums1.length % 2 === 0 ? 0 : nums2.reduce((prev, cur) => prev ^ cur);

  return nums1Xor ^ nums2Xor;
};

const nums1 = [2,1,3], nums2 = [10,2,5,0];
console.log(xorAllNums(nums1, nums2));
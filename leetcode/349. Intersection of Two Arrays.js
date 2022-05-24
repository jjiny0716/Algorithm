/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const resultSet = new Set();
  const nums2Set = new Set(nums2);
  for (let num of nums1) {
    if (nums2Set.has(num)) resultSet.add(num);
  }

  return [...resultSet];
};

const nums1 = [4,9,5], nums2 = [9,4,9,8,4];
console.log(intersection(nums1, nums2));
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = {};
  const stack = [];

  for (let i = 0 ; i < nums2.length ; i++) {
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      map[stack.pop()] = nums2[i];
    }
    stack.push(nums2[i]);
  }
  for (let num of stack) map[num] = -1;
  
  const result = [];
  for (let num of nums1) result.push(map[num]);
  return result;
};

const nums1 = [2,4], nums2 = [1,2,3,4];
console.log(nextGreaterElement(nums1, nums2));

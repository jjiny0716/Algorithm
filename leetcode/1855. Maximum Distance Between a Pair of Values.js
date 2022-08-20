// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var maxDistance = function(nums1, nums2) {
//   let result = 0;
//   for (let i = 0 ; i < nums1.length ; i++) {
//     result = Math.max(result, binarySearch(nums2, i, nums2.length - 1, nums1[i]) - i);
//   }

//   function binarySearch(arr, s, e, target) {
//     while (s + 1 < e) {
//       const mid = Math.floor((s + e) / 2);
//       if (arr[mid] === target) return mid;
//       else if (arr[mid] < target) e = mid;
//       else s = mid + 1;
//     }

//     return s;
//   }

//   return result;
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
  let i, j = 0, result = 0;
  for (i = 0 ; i < nums1.length ; i++) {
    while (nums1[i] <= nums2[j + 1] && j < nums2.length - 1) j++;
    result = Math.max(result, j - i);
  }

  return result;
};

const nums1 = [2, 2, 2], nums2 = [10, 10, 1];
console.log(maxDistance(nums1, nums2));
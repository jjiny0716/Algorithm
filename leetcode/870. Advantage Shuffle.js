/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2 = nums2.map((num, i) => [num, i]).sort((a, b) => a[0] - b[0]);
  let i = 0, j;
  const arr1 = [], arr2 = [];
  for (j = 0; j < nums2.length && i < nums1.length ; j++) {
    while (nums1[i] <= nums2[j][0]) {
      arr2.push(nums1[i]);
      i++;
    }
    if (i === nums1.length) break;

    arr1.push(nums1[i]);
    i++
  }

  const sortedResult = [...arr1, ...arr2];
  const result = new Array(nums1.length);

  for (let i = 0 ; i < nums1.length ; i++) {
    result[nums2[i][1]] = sortedResult[i];
  }
  return result;
};

const nums1 = [12,24,8,32], nums2 = [13,25,32,11];
console.log(advantageCount(nums1, nums2));
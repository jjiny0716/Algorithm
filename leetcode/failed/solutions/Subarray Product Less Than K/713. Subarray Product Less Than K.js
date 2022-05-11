/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let result = 0;
  let totalProduct = 1;

  for (let i = 0, j = 0 ; j < nums.length ; j++) {
    totalProduct *= nums[j];
    while (totalProduct >= k && i <= j) {
      totalProduct /= nums[i];
      i++;
    } 

    result += j - i + 1;
  }

  return result;
};

const nums = [1, 2, 3], k = 0;
console.log(numSubarrayProductLessThanK(nums, k));

// brute force O(n^2)
// var numSubarrayProductLessThanK = function (nums, k) {
//   const n = nums.length;
//   let result = 0;

//   for (let i = 0 ; i < n ; i++) {
//     let totalProduct = 1;
//     for (let j = i ; j < n ; j++) {
//       totalProduct *= nums[j];
//       if (totalProduct < k) result++;
//       else break;
//     }
//   }

//   return result;
// };

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// two pointer greedy O(n)
var findClosestElements = function(arr, k, x) {
  let left = 0, right = arr.length - 1;

  while (right - left >= k) {
    if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) right--;
    else left++;
  }

  return arr.slice(left, right + 1);
};

const arr = [1,1,2,2,2,2,2,3,3], k = 3, x = 3;
console.log(findClosestElements(arr, k, x));

// binary search
var findClosestElements2 = function(arr, k, x) {
  let left = 0, right = arr.length - k;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (x * 2 > arr[mid] + arr[mid + k]) left = mid + 1;
    else right = mid - 1;
  }

  return arr.slice(left, left + k);
};
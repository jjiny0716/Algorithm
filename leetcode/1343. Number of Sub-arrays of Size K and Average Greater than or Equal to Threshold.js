/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let sum = 0;
  for (let i = 0 ; i < k - 1; i++) sum += arr[i];

  let result = 0;
  for (let i = -1 ; i < arr.length - k ; i++) {
    sum += arr[i + k] - (arr[i] || 0);
    if (sum >= threshold * k) result++;
  }

  return result;
};

const arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4;
console.log(numOfSubarrays(arr, k, threshold));
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  const n = arr.length;
  let l = 0, r = n - 1;
  while (arr[r - 1] <= arr[r]) r--;
  let result = r;
  for (l = 0 ; l < r && (l === 0 || arr[l - 1] <= arr[l]); l++) {
    while (r < n && arr[l] > arr[r]) r++;
    result = Math.min(result, r - l - 1);
  }
  return result;
};

const arr = [5,4,3,2,1];
console.log(findLengthOfShortestSubarray(arr));



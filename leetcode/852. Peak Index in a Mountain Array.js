/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) left = mid + 1;
    else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) right = mid - 1;
    else return mid;
  }

  return left;
};

const arr = [0,10,5,2];
console.log(peakIndexInMountainArray(arr));
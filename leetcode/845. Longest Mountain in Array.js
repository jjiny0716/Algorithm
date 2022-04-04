/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  let direction = 0, peak = false;
  let size = 0, maxSize = 0;
  for (let i = 1 ; i < arr.length ; i++) {
    if (arr[i - 1] < arr[i]) {
      if (direction === 1) size++; 
      else if (direction === -1) {
        size = 0;
        peak = false;
      }
      direction = 1;
    }
    else if (arr[i - 1] > arr[i]) { 
      if (direction === 1) peak = true;
      if (direction === 0) size = 0;
      else size++;
      direction = -1;
    }
    else {
      size = 0;
      direction = 0;
      peak = false;
    }
    if (peak) maxSize = Math.max(maxSize, size);
  }

  return maxSize > 0 ? maxSize + 2 : 0;
};  

const arr = [9,8,7,6,5,14];
console.log(longestMountain(arr));
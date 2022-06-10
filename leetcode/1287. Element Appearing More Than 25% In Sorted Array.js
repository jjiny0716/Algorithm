/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  let curI = arr[0];
  let count = 0;
  for (let i = 0 ; i < arr.length ; i++) {
    count++;
    if (curI !== arr[i + 1]) {
      if (count > arr.length / 4) return curI;
      curI = arr[i + 1];
      count = 0;
    }
  }

  return -1;
};

const arr = [1,2,2,6,6,6,6,7,10];
console.log(findSpecialInteger(arr));
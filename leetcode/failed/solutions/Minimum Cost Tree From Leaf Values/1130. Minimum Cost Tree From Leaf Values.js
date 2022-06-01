/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
  let result = 0;
  while (arr.length > 1) {
    const min = Math.min(...arr);
    const minIndex = arr.findIndex((value) => value === min);
    result += Math.min((arr[minIndex - 1] || 16), (arr[minIndex + 1] || 16)) * arr[minIndex];
    arr.splice(minIndex, 1);
  }

  return result;
};

const arr = [15,13,5,3,15];
console.log(mctFromLeafValues(arr));
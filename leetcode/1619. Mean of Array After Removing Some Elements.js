/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  const n = arr.length;
  const removeSize = Math.floor(n * 0.05);
  const size = arr.length - 2 * removeSize;
  arr.sort((a, b) => a - b);

  let sum = 0;
  for (let i = removeSize ; i < removeSize + size ; i++) {
    sum += arr[i];
  }

  return sum / size;
};

const arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4];
console.log(trimMean(arr));

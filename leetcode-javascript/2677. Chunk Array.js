/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  const resultArr = [];
  let arrChunk = [];
  for (let i = 0 ; i < arr.length ; i++) {
    if (i % size === 0) {
      arrChunk = [];
      resultArr.push(arrChunk);
    }
    arrChunk.push(arr[i]);
  }

  return resultArr;
};
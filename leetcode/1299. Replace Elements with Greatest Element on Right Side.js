/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  const result = new Array(arr.length);
  let max = 0;
  for (let i = arr.length - 1 ; i >= 0 ; i--) {
    result[i] = max;
    max = Math.max(max, arr[i]);
  }
  result[result.length - 1] = -1;
  
  return result;
};

const arr = [17,18,5,4,6,1];
console.log(replaceElements(arr));
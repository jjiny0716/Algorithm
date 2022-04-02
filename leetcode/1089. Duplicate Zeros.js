/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const temp = new Array();
  for (let n of arr) {
    if (n === 0) temp.push(n);
    temp.push(n);
    if (temp.length >= arr.length) break;
  }
  for (let i = 0 ; i < arr.length ; i++) arr[i] = temp[i];
};

const arr = [1,0,2,3,0,4,5,0];
duplicateZeros(arr);
console.log(arr);
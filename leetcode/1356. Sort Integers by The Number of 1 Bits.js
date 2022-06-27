/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  arr = arr.map((value) => [value, [...value.toString(2)].reduce((prev, bit) => prev += Number(bit), 0)]);
  arr.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);

  return arr.map(([value, _]) => value);
};

const arr = [0,1,2,3,4,5,6,7,8];
console.log(sortByBits(arr));
/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;
  const result = [];

  for (const elem of arr) {
    if (elem instanceof Array) result.push(...flat(elem, n - 1));
    else result.push(elem);
  }

  return result;
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 1;
console.log(flat(arr, n));

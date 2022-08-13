/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
  if (original.length !== m * n) return [];
  return original.reduce((arr, element, i) => {
    if (i % n === 0) arr.push([]);
    arr.at(-1).push(element);
    return arr;
  }, []);
};

const original = [1,2,3,4], m = 2, n = 2;
console.log(construct2DArray(original, m, n));

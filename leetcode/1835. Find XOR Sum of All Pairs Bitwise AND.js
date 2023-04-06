/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var getXORSum = function (arr1, arr2) {
  const xor = (a, b) => a ^ b;
  return arr1.reduce(xor) & arr2.reduce(xor);
};

const arr1 = [1, 2, 3],
  arr2 = [6, 5];
console.log(getXORSum(arr1, arr2));

// 101
// 110
// 211
// 011

// 001
// 010
// 011

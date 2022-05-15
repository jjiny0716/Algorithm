/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
// brute force
var findKthBit = function (n, k) {
  let binaryString = "0";
  for (let i = 1 ; i < n ; i++) {
    binaryString = binaryString + "1" + binaryString.split('').map((bit) => bit === '1' ? '0' : '1').reverse().join('');
  }

  return binaryString[k - 1];
};

const n = 20, k = 11;
console.log(findKthBit(n, k));

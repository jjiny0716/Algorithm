/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  const pSum = [0];
  for (const e of arr) pSum.push(pSum.at(-1) + e);
  let result = 0;
  for (let size = 1 ; size < pSum.length ; size += 2) {
    for (let i = size ; i < pSum.length ; i++) {
      result += pSum[i]  - pSum[i - size];
    }
  }

  return result;
};

const arr = [1,4,2,5,3];
console.log(sumOddLengthSubarrays(arr));
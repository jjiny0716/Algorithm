/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
  let maxZeroLength = 0, maxOneLength = 0;
  let curBit = -1, curLength = 0;
  for (let bit of s) {
    if (curBit !== bit) {
      curBit = bit;
      curLength = 1;
    }
    else {
      curLength++;
    }
    if (curBit === '1') maxOneLength = Math.max(maxOneLength, curLength);
    else if (curBit === '0') maxZeroLength = Math.max(maxZeroLength, curLength);
  }

  return maxOneLength > maxZeroLength;
};

const s = "110100010";
console.log(checkZeroOnes(s));

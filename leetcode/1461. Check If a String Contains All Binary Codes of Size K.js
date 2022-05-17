/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
  const binaryCodes = new Set();

  for (let i = 0 ; i <= s.length - k ; i++) {
    const binaryCode = s.slice(i, i + k);
    binaryCodes.add(binaryCode);
  }

  return binaryCodes.size === 2 ** k;
};

const s = "00110110", k = 2;
console.log(hasAllCodes(s, k));
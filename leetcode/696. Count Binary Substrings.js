/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let lastCount = 0, count = 0, curBit = s[0];
  let result = 0;
  for (let c of s) {
    if (c === curBit) {
      count++;
    }
    else {
      lastCount = count;
      count = 1;
      curBit = c;
    }

    if (count <= lastCount) result++;
  }

  return result;
};

const s = "10101";
console.log(countBinarySubstrings(s));
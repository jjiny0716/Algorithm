/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function (s, k) {
  let decoded = "";
  for (let c of s) {
    if (isNaN(Number(c))) {
      decoded += c;
    } else {
      decoded = decoded.repeat(c);
    }
    if (decoded.length >= k) {
      return decoded[k - 1];
    }
  }

  return null;
};

const s = "leet2code3", k = 10;
console.log(decodeAtIndex(s, k));

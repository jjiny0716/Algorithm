/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const n = code.length;
  const result = new Array(n).fill(0);
  if (k === 0) return result;
  const size = Math.abs(k);
  let s = 0, e = size - 1;
  let windowSum = code.slice(s, e + 1).reduce((sum, cur) => sum += cur, 0);
  for (let i = 0 ; i < n ; i++) {
    windowSum += code[(++e) % n];
    windowSum -= code[s++];
    result[k > 0 ? i : (i + size + 1) % n] = windowSum;
  }

  return result;
};

const code = [2,4,9,3], k = -2;
console.log(decrypt(code, k));
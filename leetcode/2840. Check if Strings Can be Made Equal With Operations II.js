/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
  const n = s1.length;
  const oddCharCount = new Array(26).fill(0);
  const evenCharCount = new Array(26).fill(0);

  for (let i = 0 ; i < n ; i += 2) {
    evenCharCount[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    evenCharCount[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  for (let i = 1 ; i < n ; i += 2) {
    oddCharCount[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    oddCharCount[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  return oddCharCount.every((value) => value === 0) && evenCharCount.every((value) => value === 0)
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
  let str2Index = 0;
  for (const c of str1) {
    if (str2Index === str2.length) break;
    if (c === str2[str2Index] || String.fromCharCode((c.charCodeAt(0) - 'a'.charCodeAt(0) + 1) % 26 + 'a'.charCodeAt(0)) === str2[str2Index]) {
      str2Index++;
    }
  }
  
  return str2Index === str2.length;
};

const str1 = "zc", str2 = "ad";
console.log(canMakeSubsequence(str1, str2));
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sIndex = 0;
  for (let i = 0 ; i < t.length ; i++) {
    if (s[sIndex] === t[i]) sIndex++;
  }
  return sIndex === s.length;
}; 

const s = "abc", t = "ahbgdc";
console.log(isSubsequence(s, t));
/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
var countSubstrings = function(s, c) {
  let charCount = 0;
  for (const char of s) {
    if (char === c) charCount++;
  }
  
  return (charCount) * (charCount + 1) / 2;
};

const s = "ababa", c = "a";
console.log(countSubstrings(s, c));
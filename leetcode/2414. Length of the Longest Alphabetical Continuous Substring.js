/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
  let result = 1, substringLength = 1;
  for (let i = 1 ; i < s.length ; i++) {
    if (s.charCodeAt(i - 1) + 1 === s.charCodeAt(i)) {
      substringLength++;
      result = Math.max(result, substringLength);
    }
    else substringLength = 1;
  }

  return result;
};

const s = "abcde";
console.log(longestContinuousSubstring(s));
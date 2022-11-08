/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = new Map();
  let maxLength = 0, i = 0;
  for (let j = 0 ; j < s.length ; j++) {
    map.set(s[j], (map.get(s[j]) || 0) + 1);

    while (map.get(s[j]) === 2) {
      map.set(s[i], (map.get(s[i]) || 0) - 1);
      i++;
    }

    maxLength = Math.max(maxLength, j - i + 1);
  }

  return maxLength;
};

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const map = new Map();
  let i = 0, j, max = 0;
  let result = 0;

  for (j = 0 ; j < s.length ; j++) {
    map.set(s[j], (map.get(s[j]) || 0) + 1);
    max = Math.max(max, map.get(s[j]));

    // length - max count of char > can replace count
    while((j - i + 1) - max > k) {
      map.set(s[i], map.get(s[i]) - 1);
      i++;
    }

    result = Math.max(result, j - i + 1);
  }

  return result;
};

const s = "AABABBA", k = 1;
console.log(characterReplacement(s, k));
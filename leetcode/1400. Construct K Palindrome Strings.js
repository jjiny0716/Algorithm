/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
  if (s.length < k) return false;
  const map = {};
  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  let oddCount = 0;
  const charCounts =  Object.values(map)
  for (let charCount of charCounts) {
    if (charCount % 2 === 1) oddCount++;
  }

  return oddCount <= k;
};

const s = "leetcode", k = 3
console.log(canConstruct(s, k));
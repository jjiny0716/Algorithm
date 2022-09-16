/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
  const map = {};
  let result = 0;
  for (let i = 0 ; i < 3 ; i++) map[s[i]] = (map[s[i]] || 0) + 1;
  if (Object.values(map).every((v) => v === 1)) result++;

  for (let i = 3 ; i < s.length ; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
    map[s[i - 3]] = map[s[i - 3]] - 1;
    if (Object.values(map).every((v) => v === 1 || v === 0)) result++;
  }

  return result;
};

const s = "xyzzaz";
console.log(countGoodSubstrings(s));
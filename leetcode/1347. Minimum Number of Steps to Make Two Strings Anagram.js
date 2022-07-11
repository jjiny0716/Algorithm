/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const map1 = {};
  const map2 = {};

  for (let i = 0 ; i < s.length ; i++) {
    map1[s[i]] = (map1[s[i]] || 0) + 1;
    map2[t[i]] = (map2[t[i]] || 0) + 1;
  }

  let result = s.length;
  for (let key of Object.keys(map1)) {
    result -= Math.min(map1[key], map2[key] || 0);
  }

  return result;
};

const s = "anagram", t = "mangaar";
console.log(minSteps(s, t));
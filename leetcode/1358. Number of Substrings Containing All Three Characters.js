/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  let i = 0, j;
  const map = {
    a: 0,
    b: 0,
    c: 0,
  }
  let result = 0;
  for (j = 0 ; j < s.length ; j++) {
    map[s[j]]++;
    while (map.a > 0 && map.b > 0 && map.c > 0) {
      if (map[s[i]] === 1) break;
      map[s[i++]]--;
    }
    if (map.a > 0 && map.b > 0 && map.c > 0) result += i + 1;
  }

  return result;
};

const s = "abcabc";
console.log(numberOfSubstrings(s));
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const map = {};
  for (let char of s) map[char] ? map[char]++ : map[char] = 1;

  const result = [s[0] === 'I' ? 0 : s.length];
  map[s[0]]--;
  for (let char of s) {
    if (char === 'I') result.push(s.length - map[char]);
    else result.push(map[char]);
    map[char]--;
  }

  return result;
};

const s = "DDI";
// const s = "IIDDID";
console.log(diStringMatch(s));

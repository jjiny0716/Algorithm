/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  const map = {
    'R': 0,
    'L': 0,
  }
  let result = 0;

  for (let char of s) {
    map[char]++;
    if (map['R'] === map['L']) {
      result++;
      map['R'] = 0;
      map['L'] = 0;
    }
  }

  return result;
};

const s = "RLRRLLRLRL";
console.log(balancedStringSplit(s));
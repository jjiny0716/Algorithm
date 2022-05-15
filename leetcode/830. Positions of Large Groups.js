/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  s += '@';
  let last = '@';
  let start = 0, end = 0;
  const result = [];

  for (let i = 0 ; i < s.length ; i++) {
    end = i;
    if (s[i] !== last) {
      if (end - start >= 3) {
        result.push([start, end - 1]);
      }
      last = s[i];
      start = i;
    }
  }

  return result;
};

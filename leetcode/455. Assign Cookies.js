/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let result = 0;

  let sIndex = 0;
  for (let i = 0 ; i < g.length ; i++) {
    while (g[i] > s[sIndex] && sIndex < s.length) sIndex++;
    if (sIndex >= s.length) break;
    result++;
    sIndex++;
  }

  return result;
};

const g = [1,2,3], s = [1,1];
console.log(findContentChildren(g, s));
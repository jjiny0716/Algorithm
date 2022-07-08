/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  const map = {};
  let result = 0;
  for (let [a, b] of dominoes) {
    if (a > b) [a, b] = [b, a];
    if (!map[a]) map[a] = {};
    result += map[a][b] || 0;
    map[a][b] = (map[a][b] || 0) + 1;
  }

  return result;
};

const dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]];
console.log(numEquivDominoPairs(dominoes));
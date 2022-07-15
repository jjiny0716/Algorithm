/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  const map = {};
  for (let [winner, loser] of matches) {
    if (map[winner] === undefined) map[winner] = 0;
    map[loser] = (map[loser] || 0) + 1;
  }

  const result = [[], []];
  for (let [player, loseCount] of Object.entries(map)) {
    if (loseCount === 0 || loseCount === 1) {
      result[loseCount].push(player);
    }
  }

  return result;
};

const matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];
console.log(findWinners(matches));
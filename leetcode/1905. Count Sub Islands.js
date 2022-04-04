/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const m = grid1.length, n = grid1[0].length;
  function isSubIsland(y, x) {
    if (y < 0 || x < 0 || y >= m || x >= n || grid2[y][x] === 0) return true;
    grid2[y][x] = 0;
    let result = grid1[y][x] === 1;
    for (let d = 0 ; d < 4 ; d++) result = isSubIsland(y + dy[d], x + dx[d]) && result;
    return result;
  }

  let result = 0;
  for (let y = 0 ; y < m ; y++) {
    for (let x = 0 ; x < n ; x++) {
      if (grid2[y][x] === 0) continue;
      result += isSubIsland(y, x) ? 1 : 0;
      console.log(grid2, result);
    }
  }
  return result;
};

const grid1 = [
  [1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
];
const grid2 = [
  [1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1],
  [0, 1, 0, 0, 0],
  [1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0],
];

console.log(countSubIslands(grid1, grid2));

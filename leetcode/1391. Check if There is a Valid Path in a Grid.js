/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {
  const street = [
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
    [
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
  ];
  const pathGrid = Array.from({ length: grid.length * 3 }, () => Array.from({ length: grid[0].length * 3 }));
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      const s = grid[y][x] - 1;
      [pathGrid[y * 3 + 0][x * 3 + 0], pathGrid[y * 3 + 0][x * 3 + 1], pathGrid[y * 3 + 0][x * 3 + 2]] = [street[s][0][0], street[s][0][1], street[s][0][2]];
      [pathGrid[y * 3 + 1][x * 3 + 0], pathGrid[y * 3 + 1][x * 3 + 1], pathGrid[y * 3 + 1][x * 3 + 2]] = [street[s][1][0], street[s][1][1], street[s][1][2]];
      [pathGrid[y * 3 + 2][x * 3 + 0], pathGrid[y * 3 + 2][x * 3 + 1], pathGrid[y * 3 + 2][x * 3 + 2]] = [street[s][2][0], street[s][2][1], street[s][2][2]];
    }
  }
  
  let result = false;
  function dfs(y, x, mat) {
    if (result) return;
    if (y < 0 || x < 0 || y >= mat.length || x >= mat[0].length || mat[y][x] === 0) return;
    if (y === mat.length - 2 && x === mat[0].length - 2) {
      result = true;
      return;
    }
    mat[y][x] = 0;
    dfs(y, x + 1, mat);
    dfs(y + 1, x, mat);
    dfs(y, x - 1, mat);
    dfs(y - 1, x, mat);
    mat[y][x] = 1;
  }
  dfs(1, 1, pathGrid);
  return result;
};

const grid = [
  [2, 4, 3],
  [6, 5, 2],
];
console.log(hasValidPath(grid));
[
  [0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0],
];

// upscaled grid를 정의하는 또다른 방법 
// for (let i = 0; i < m; ++i) {
//   for (let j = 0; j < n; ++j) {
//       let r = grid[i][j];
//       g[i * 3 + 1][j * 3 + 1] = true;
//       g[i * 3 + 1][j * 3 + 0] = r == 1 || r == 3 || r == 5;
//       g[i * 3 + 1][j * 3 + 2] = r == 1 || r == 4 || r == 6;
//       g[i * 3 + 0][j * 3 + 1] = r == 2 || r == 5 || r == 6;
//       g[i * 3 + 2][j * 3 + 1] = r == 2 || r == 3 || r == 4;
//   }
// }
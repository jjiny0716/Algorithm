/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (y === 0 && x === 0) continue;
      grid[y][x] += Math.min(grid[y - 1] !== undefined ? grid[y - 1][x] : Infinity, grid[y][x - 1] ?? Infinity);
    }
  }
  
  return grid[m - 1][n - 1];
};

const grid = [
  [0, 0],
  [0, 0],
];
[
  [1, 4, 5],
  [2, 7, 6],
  [6, 8, 7],
];
console.log(minPathSum(grid));

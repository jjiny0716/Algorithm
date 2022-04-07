/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const result = Array.from({ length: m }, () => Array.from({ length: n }));
  for (let i = 0; i < m * n; i++) {
    const [y1, x1] = [Math.floor(i / n), i % n];
    const j = (i + k) % (m * n);
    const [y2, x2] = [Math.floor(j / n), j % n];
    result[y2][x2] = grid[y1][x1];
  }

  return result;
};

const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  k = 1;
console.log(shiftGrid(grid, k));

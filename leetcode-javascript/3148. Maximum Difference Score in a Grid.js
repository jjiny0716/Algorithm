/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const minGrid = Array.from({ length: n }, () => new Array(m));
  const MAX = 10 ** 5 + 1;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      minGrid[y][x] = Math.min(
        minGrid[y - 1]?.[x] || MAX,
        minGrid[y][x - 1] || MAX,
        grid[y][x]
      );
    }
  }

  let result = -Infinity;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (y === 0 && x === 0) continue;
      result = Math.max(
        result,
        grid[y][x] - Math.min(minGrid[y - 1]?.[x] || Infinity, minGrid[y][x - 1] || Infinity)
      );
    }
  }

  return result;
};

const grid = [
  [4, 3],
  [2, 3],
];

console.log(maxScore(grid));

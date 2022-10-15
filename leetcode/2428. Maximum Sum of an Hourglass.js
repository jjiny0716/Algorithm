/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const pSumMatrix = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }).fill(0));

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      pSumMatrix[y + 1][x + 1] = grid[y][x] + pSumMatrix[y][x + 1] + pSumMatrix[y + 1][x] - pSumMatrix[y][x];
    }
  }

  let result = 0;
  for (let y = 3; y < m + 1; y++) {
    for (let x = 3; x < n + 1; x++) {
      const hourglassValue =
        pSumMatrix[y][x] - pSumMatrix[y - 3][x] - pSumMatrix[y][x - 3] + pSumMatrix[y - 3][x - 3] - grid[y - 2][x - 1] - grid[y - 2][x - 3];
      result = Math.max(result, hourglassValue);
    }
  }

  return result;
};

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(maxSum(grid));

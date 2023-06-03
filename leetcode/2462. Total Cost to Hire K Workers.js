/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  const onesRow = new Array(m).fill(0);
  const onesCol = new Array(n).fill(0);

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === 1) {
        onesRow[y]++;
        onesCol[x]++;
      }
    }
  }

  const diff = Array.from({ length: m }, () => new Array(n));
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      diff[y][x] = 2 * onesRow[y] + 2 * onesCol[x] - m - n;
    }
  }

  return diff;
};

const grid = [
  [0, 1, 1],
  [1, 0, 1],
  [0, 0, 1],
];
console.log(onesMinusZeros(grid));

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length;
  const rows = Array.from({ length: n }, () => []);
  const cols = Array.from({ length: n }, () => []);

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const e = grid[y][x];
      rows[y].push(e);
      cols[x].push(e);
    }
  }

  let result = 0;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (rows[y].every((e, i) => cols[x][i] === e)) result++;
    }
  }

  return result;
};

const grid = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];
console.log(equalPairs(grid));

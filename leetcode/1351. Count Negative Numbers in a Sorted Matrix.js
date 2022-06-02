/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  let y = 0, result = 0;
  for (let x = m - 1 ; x >= 0 ; x--) {
    while (y < n && grid[y][x] >= 0) y++;
    if (y === n) break;
    result += n - y;
  }

  return result;
};

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
console.log(countNegatives(grid));

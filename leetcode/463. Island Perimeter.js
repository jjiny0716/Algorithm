/**
 * @param {number[][]} grid
 * @return {number}
 */
// dfs
var islandPerimeter = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  function getPerimeter(y, x) {
    if (y < 0 || x < 0 || y >= m || x >= n || grid[y][x] === 0) return 1;
    if (grid[y][x] === -1) return 0;
    grid[y][x] = -1;
    return getPerimeter(y, x + 1) + getPerimeter(y + 1, x) + getPerimeter(y, x - 1) + getPerimeter(y - 1, x);
  }

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === 1) return getPerimeter(y, x);
    }
  }
};

const grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
// console.log(islandPerimeter(grid));

// iteration
var islandPerimeter = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let result = 0;
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === 0) continue;
      result += 4;
      if (y > 0 && grid[y - 1][x] === 1) result -= 2;
      if (x > 0 && grid[y][x - 1] === 1) result -= 2;
    }
  }

  return result;
};

console.log(islandPerimeter(grid));
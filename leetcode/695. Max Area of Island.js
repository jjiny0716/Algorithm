/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const width = grid[0].length;
  const height = grid.length;
  let maxArea = 0;

  function dfs(y, x) {
    if (x < 0 || y < 0 || x >= width || y >= height) return 0;
    if (grid[y][x] === 0) return 0;
    let sum = 1;
    grid[y][x] = 0;
    for (let i = 0 ; i < 4 ; i++) {
      sum += dfs(y + dy[i], x + dx[i]);
    }
    return sum;
  }

  for (let y = 0 ; y < height ; y++) {
    for (let x = 0 ; x < width ; x++) {
      if (grid[y][x] === 1) maxArea = Math.max(maxArea, dfs(y, x));
    }
  }

  return maxArea;
};

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

console.log(maxAreaOfIsland(grid));
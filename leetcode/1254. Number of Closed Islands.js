/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const width = grid[0].length;
  const height = grid.length;

  function islandToWater(y, x) {
    if (y < 0 || x < 0 || y >= height || x >= width || grid[y][x] === 1) return;
    grid[y][x] = 1;
    for (let d = 0; d < 4; d++) islandToWater(y + dy[d], x + dx[d]);
  }

  // remove island connected to border
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (y === 0 || x === 0 || y === height - 1 || x === width - 1) {
        islandToWater(y, x);
      }
    }
  }

  let result = 0;
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      if (grid[y][x] === 0) {
        islandToWater(y, x);
        result++;
      }
    }
  }

  return result;
};

const grid = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

console.log(closedIsland(grid));

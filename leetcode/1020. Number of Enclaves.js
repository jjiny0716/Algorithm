/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const width = grid[0].length;
  const height = grid.length;
  function removeLand(y, x) {
    if (grid[y] === undefined || grid[y][x] == undefined || grid[y][x] === 0) return;
    grid[y][x] = 0;
    for (let d = 0; d < 4; d++) {
      removeLand(y + dy[d], x + dx[d]);
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (y === 0 || x === 0 || y === height - 1 || x === width - 1) removeLand(y, x);
    }
  }

  let result = 0;
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      result += grid[y][x];
    }
  }

  return result;
};

const grid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 1, 1],
];
console.log(numEnclaves(grid));

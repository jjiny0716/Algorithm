/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const m = grid.length;
  const n = grid[0].length;
  let emptySquareCount = 0;
  const starting = [0, 0];

  // gather information of grid
  for (let y = 0 ; y < m ; y++) {
    for (let x = 0 ; x < n ; x++) {
      const value = grid[y][x];
      if (value === 0) emptySquareCount++;
      else if (value === 1) [starting[0], starting[1]] = [y, x];
    }
  }

  let result = 0;
  function findPaths(y, x, length) {
    if (y < 0 || x < 0 || y >= m || x >= n || grid[y][x] === -1 || (grid[y][x] === 1 && length !== 0)) return;
    if (grid[y][x] === 2) {
      result += (length === emptySquareCount + 1) ? 1 : 0;
      return;
    } 

    grid[y][x] = -1;

    for (let direction of directions) {
      const [dy, dx] = direction;
      findPaths(y + dy, x + dx, length + 1);
    }
    grid[y][x] = 0;
  }
  findPaths(starting[0], starting[1], 0);

  return result;
};

const grid = [[0,1],[2,0]];
console.log(uniquePathsIII(grid));

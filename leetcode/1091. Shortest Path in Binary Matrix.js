/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const direction = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  const n = grid.length;
  const queue = [[0, 0]];
  let minPathLength = 0;
  while (queue.length) {
    minPathLength++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [y, x] = queue.shift();
      if (!isValidCell(y, x, grid)) continue;
      if (y === n - 1 && x === n - 1) return minPathLength;
      grid[y][x] = 1;
      for (let d of direction) {
        const ny = y + d[0];
        const nx = x + d[1];
        if (isValidCell(ny, nx, grid)) queue.push([ny, nx]);
      }
    }
  }

  function isValidCell(y, x, grid) {
    const n = grid.length;
    return !(y < 0 || x < 0 || y >= n || x >= n || grid[y][x] === 1);
  }

  return -1;
};

const grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
console.log(shortestPathBinaryMatrix(grid));

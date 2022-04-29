/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const n = grid.length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const queue = [];

  function isOutOfGrid(y, x) {
    return y < 0 || x < 0 || y >= n || x >= n;
  }

  function dfs(y, x) {
    if (isOutOfGrid(y, x)) return;
    if (grid[y][x] === 2) return;
    if (grid[y][x] === 0) {
      queue.push([y, x]);
      return;
    }
    grid[y][x] = 2;

    for (let d of directions) {
      const [dy, dx] = d;
      dfs(y + dy, x + dx);
    }
  }

  outerLoop: for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === 1) {
        dfs(y, x);
        break outerLoop;
      }
    }
  }

  // bfs
  let result = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [y, x] = queue.shift();
      if (grid[y][x] === 2) continue;
      if (grid[y][x] === 1) return result;
      grid[y][x] = 2;
      for (let d of directions) {
        const [dy, dx] = d;
        const [ny, nx] = [y + dy, x + dx];
        if (!isOutOfGrid(ny, nx) && grid[ny][nx] !== 2) queue.push([ny, nx]);
      }
    }
    result++;
  }

  return -1;
};

const grid = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];
console.log(shortestBridge(grid));

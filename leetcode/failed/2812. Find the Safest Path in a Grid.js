/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function (grid) {
  if (grid.length === 1) return 0;
  const n = grid.length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const queue = [];
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === 1) queue.push([y, x]);
    }
  }
  const visited = Array.from({ length: n }, () => new Array(n).fill(false));
  const isValidPoint = (y, x) => {
    return y >= 0 && x >= 0 && y < n && x < n && !visited[y][x];
  };
  let level = 1;
  while (queue.length) {
    const pointCount = queue.length;
    for (let i = 0; i < pointCount; i++) {
      const [y, x] = queue.shift();
      if (!isValidPoint(y, x)) continue;

      visited[y][x] = true;
      grid[y][x] = level;

      for (const [dy, dx] of directions) {
        const [ny, nx] = [y + dy, x + dx];
        if (!isValidPoint(ny, nx)) continue;
        queue.push([ny, nx]);
      }
    }
    level++;
  }
  console.log(grid);
  const isReachable = (minSafe) => {
    const visited = Array.from({ length: n }, () => new Array(n).fill(false));
    const dfs = (y, x) => {
      if (y < 0 || x < 0 || y >= n || x >= n) return false;
      if (visited[y][x]) return false;
      if (grid[y][x] < minSafe) return false;
      if (y === n - 1 && x === n - 1) return true;

      visited[y][x] = true;

      let result = false;
      for (const [dy, dx] of directions) {
        result = result || dfs(y + dy, x + dx);
        if (result) break;
      }
      return result;
    };

    return dfs(0, 0);
  };

  let min = 1,
    max = level - 1;
  while (min < max) {
    const mid = Math.floor((min + max) / 2);
    if (isReachable(mid)) min = mid + 1;
    else max = mid;
  }

  return min - 2;
};

const grid = [
  [0, 1, 1],
  [0, 1, 1],
  [0, 0, 1],
];
[
  [2, 1, 1],
  [2, 1, 1],
  [3, 2, 1],
];
console.log(maximumSafenessFactor(grid));

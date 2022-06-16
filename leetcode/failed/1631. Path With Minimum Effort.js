/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const visited = Array.from({ length: m }, () => Array.from({ length: n }));
  let minEffort = Infinity;
  function dfs(y, x, curMaxEffort) {
    if (curMaxEffort >= minEffort) return;
    if (y === m - 1 && x === n - 1) {
      minEffort = Math.min(curMaxEffort, minEffort);
      return;
    }
    visited[y][x] = true;

    for (let [dy, dx] of directions) {
      const [ny, nx] = [y + dy, x + dx];
      if (ny < 0 || nx < 0 || ny >= m || nx >= n) continue;
      if (visited[ny][nx]) continue;
      dfs(ny, nx, Math.max(curMaxEffort, Math.abs(heights[y][x] - heights[ny][nx])));
    }
    visited[y][x] = false;
  }
  dfs(0, 0, 0);

  return minEffort;
};

const heights = [
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5],
];
console.log(minimumEffortPath(heights));

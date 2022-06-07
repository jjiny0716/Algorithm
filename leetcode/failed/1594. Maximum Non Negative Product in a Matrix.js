/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function (grid) {
  const MOD = 10 ** 9 + 7;
  const m = grid.length;
  const n = grid[0].length;

  const dp = Array.from({ length: m }, () => Array.from({ length: n }));
  let result = -1;

  function dfs(y, x, value) {
    if (y >= m || x >= n) return;
    if (y === m - 1 && x === n - 1) {
      result = Math.max(result, value * grid[y][x]);
    }
    if (value > 0 && value < dp[y][x]) return;
    if (value > 0) dp[y][x] = Math.max(dp[y][x], value);

    value = (value * grid[y][x]) % MOD;
    dfs(y + 1, x, value);
    dfs(y, x + 1, value);
  }
  dfs(0, 0, 1);

  return result % MOD;
};

const grid = [
  [-1, -2, -3],
  [-2, -3, -3],
  [-3, -3, -2],
];
console.log(maxProductPath(grid));

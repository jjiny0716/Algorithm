/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  const n = grid.length;
  const dp = Array.from({ length: n}, () => Array.from({ length: n }, () => Infinity));

  for (let y = 0 ; y < n ; y++) {
    for (let x = 0 ; x < n ; x++) {
      if (y === 0) {
        dp[y][x] = grid[y][x];
        continue;
      }
      for (let lastX = 0 ; lastX < n ; lastX++) {
        if (x === lastX) continue;
        dp[y][x] = Math.min(dp[y][x], grid[y][x] + dp[y - 1][lastX]);
      }
    }
  }

  return dp[n - 1].reduce((min, value) => Math.min(min, value), Infinity);
};

const arr = [
  [7]
];
console.log(minFallingPathSum(arr));

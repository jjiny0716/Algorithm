/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => Array.from({ length: Math.min(m, n) }, () => Array.from({ length: n })));

  function dfs(y, x1, x2) {
    if (y === m || x1 < 0 || x2 < 0 || x1 >= n || x2 >= n) return 0;
    if (dp[y][x1][x2]) return dp[y][x1][x2];

    const cherryCount = (x1 !== x2) ? grid[y][x1] + grid[y][x2] : grid[y][x1];
    let max = 0;

    for (let dx1 = -1 ; dx1 <= 1 ; dx1++) {
      for (let dx2 = -1 ; dx2 <= 1 ; dx2++) {
        max = Math.max(max, dfs(y + 1, x1 + dx1, x2 + dx2));
      }
    }

    dp[y][x1][x2] = cherryCount + max;
    return cherryCount + max;
  }

  return dfs(0, 0, n - 1);
};

const grid = [[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]];
console.log(cherryPickup(grid));


// TLE
var cherryPickup = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [
    [1, 1],
    [1, 0],
    [1, -1],
  ];
  const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => Array.from({ length: n })));

  let maxCherryCount = 0;
  function dfs(y, x1, x2, cherryCount) {
    if (x1 < 0 || x2 < 0 || x1 >= n || x2 >= n) return;

    cherryCount += (x1 !== x2) ? grid[y][x1] + grid[y][x2] : grid[y][x1];

    if ((dp[y][x1][x2] || -1) >= cherryCount) return;
    dp[y][x1][x2] = cherryCount;

    if (y === m - 1) {
      maxCherryCount = Math.max(maxCherryCount, cherryCount);
      return;
    }

    for (let [dy1, dx1] of directions) {
      for (let [dy2, dx2] of directions) {
        dfs(y + 1, x1 + dx1, x2 + dx2, cherryCount);
      }
    }
  }
  dfs(0, 0, n - 1, 0);

  return maxCherryCount;
};
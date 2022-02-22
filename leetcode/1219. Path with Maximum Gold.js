/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  let max = 0;

  function find(y, x, gold) {
    if (y < 0 || x < 0 || y >= grid.length || x >= grid[0].length) return;
    else if (grid[y][x] === 0) return;

    gold += grid[y][x];
    max = Math.max(max, gold);

    for (let d = 0 ; d < 4 ; d++) {
      const origin = grid[y][x];
      grid[y][x] = 0;
      find(y + dy[d], x + dx[d], gold);
      grid[y][x] = origin;
    }
  }

  for (let y = 0 ; y < grid.length ; y++) {
    for (let x = 0 ; x < grid[0].length ; x++) {
      find(y, x, 0)
    }
  }

  return max;
};

grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]];
console.log(getMaximumGold(grid));

// 다르게 한번 작성해봄
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold2 = function (grid) {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  let max = 0;

  function find(y, x, gold) {
    if (y < 0 || x < 0 || y >= grid.length || x >= grid[0].length) return gold;
    else if (grid[y][x] === 0) return gold;

    gold += grid[y][x];
    let maxGold = 0;
    for (let d = 0 ; d < 4 ; d++) {
      const origin = grid[y][x];
      grid[y][x] = 0;
      maxGold = Math.max(maxGold, find(y + dy[d], x + dx[d], gold));
      grid[y][x] = origin;
    }

    return maxGold;
  }

  for (let y = 0 ; y < grid.length ; y++) {
    for (let x = 0 ; x < grid[0].length ; x++) {
      max = Math.max(max, find(y, x, 0));
    }
  }

  return max;
};

console.log(getMaximumGold2(grid));
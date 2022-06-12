/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const result = [];

  for (let i = 0; i < n; i++) {
    let x = i,
      y;
    for (y = 0; y < m; y++) {
      if (grid[y][x] === 1 && grid[y][x + 1] === 1) {
        x++;
      } else if (grid[y][x] === -1 && grid[y][x - 1] === -1) {
        x--;
      } else break;
    }
    result.push(y === m ? x : -1);
  }

  return result;
};

const grid = [
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
  [1, 1, 1, 1, 1, 1],
  [-1, -1, -1, -1, -1, -1],
];
console.log(findBall(grid));

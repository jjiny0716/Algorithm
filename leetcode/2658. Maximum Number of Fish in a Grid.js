/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  const m = grid.length;
  const n = grid[0].length;
  const catchAllFish = (y, x) => {
    if (y < 0 || x < 0 || y >= m || x >= n) return 0;
    if (grid[y][x] === 0) return 0;

    const fishCountHere = grid[y][x];
    grid[y][x] = 0;
    return direction.reduce((fishCount, [dy, dx]) => fishCount + catchAllFish(y + dy, x + dx), fishCountHere);
  }

  let maxFish = 0;
  for (let y = 0 ; y < m ; y++) {
    for (let x = 0 ; x < n ; x++) {
      maxFish = Math.max(maxFish, catchAllFish(y, x));
    }
  }

  return maxFish;
};

const grid = [
  [0, 2, 1, 0],
  [4, 0, 0, 3],
  [1, 0, 0, 4],
  [0, 3, 2, 0],
];
console.log(findMaxFish(grid));

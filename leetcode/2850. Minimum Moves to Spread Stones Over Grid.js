/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
  const search = (y, x) => {
    if (y === 3) return 0;
    if (grid[y][x] >= 1) return search(x === 2 ? y + 1 : y, (x + 1) % 3);

    let result = Infinity;
    for (let i = 0 ; i < 3 ; i++) {
      for (let j = 0 ; j < 3 ; j++) {
        if (grid[i][j] >= 2) {
          grid[i][j]--;
          grid[y][x]++;

          const mDist = Math.abs(y - i) + Math.abs(x - j);
          result = Math.min(result, mDist + search(x === 2 ? y + 1 : y, (x + 1) % 3));

          grid[i][j]++;
          grid[y][x]--;
        }
      }
    }

    return result;
  }

  return search(0, 0);
};

const grid = [
  [1, 3, 0],
  [1, 0, 0],
  [1, 0, 3],
];
console.log(minimumMoves(grid));

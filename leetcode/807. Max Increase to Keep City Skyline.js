/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const n = grid.length;
  const rowMaxes = Array.from({length: n}).fill(0);
  const colMaxes = Array.from({length: n}).fill(0);
  for (let y = 0 ; y < n ; y++) {
    for (let x = 0 ; x < n ; x++) {
      const height = grid[y][x];
      rowMaxes[y] = Math.max(rowMaxes[y], height);
      colMaxes[x] = Math.max(colMaxes[x], height);
    }
  }
  let result = 0;
  for (let y = 0 ; y < n ; y++) {
    for (let x = 0 ; x < n ; x++) {
      const height = grid[y][x];
      result += Math.min(rowMaxes[y], colMaxes[x]) - height;
    }
  }

  return result;
};

const grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]];
console.log(maxIncreaseKeepingSkyline(grid));
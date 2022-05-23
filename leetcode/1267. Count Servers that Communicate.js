/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const rowConnected = {};
  const columnConnected = {};

  let result = 0;
  for (let r = 0 ; r < m ; r++) {
    for (let c = 0 ; c < n ; c++) {
      if (!grid[r][c]) continue;

      rowConnected[r] = (rowConnected[r] || 0) + 1;
      columnConnected[c] = (columnConnected[c] || 0) + 1;
    }
  }

  for (let r = 0 ; r < m ; r++) {
    for (let c = 0 ; c < n ; c++) {
      if (!grid[r][c]) continue;

      if (rowConnected[r] > 1 || columnConnected[c] > 1) result++;
    }
  } 

  return result;
};

const grid = [
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
];
console.log(countServers(grid));

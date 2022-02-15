/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  for (let y = 0 ; y < grid.length ; y++) {
    for (let x = 0 ; x < grid[0].length ; x++) {
      count += deleteIsland(y, x, grid) ? 1 : 0;
    }
  }

  return count;
};

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

function deleteIsland(y, x, grid) {
  if (y < 0 || x < 0 || y >= grid.length || x >= grid[0].length) return false;
  if (grid[y][x] === "0") return false;
  grid[y][x] = "0";

  for (let d = 0 ; d < 4 ; d++) {
    deleteIsland(y + dy[d], x + dx[d], grid);
  }

  return true;
}

grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]];

console.log(numIslands(grid));
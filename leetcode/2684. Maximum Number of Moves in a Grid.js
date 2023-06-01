/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const reachableGrid = Array.from({ length: m }, () => new Array(n).fill(false));
  
  // init
  for (let y = 0 ; y < m ; y++) {
    reachableGrid[y][0] = true;
  }

  let move = 0;
  for (let x = 1 ; x < n ; x++) {
    let count = 0;
    for (let y = 0 ; y < m ; y++) {
      for (let dy = -1 ; dy <= 1 ; dy++) {
        if (grid[y + dy] && reachableGrid[y + dy][x - 1] && grid[y + dy][x - 1] < grid[y][x]) {
          reachableGrid[y][x] = true;
          count++;
          break;
        }
      }

    }

    if (count === 0) break;
    move++;
  }

  return move;
};

const grid = [
  [2, 4, 3, 5],
  [5, 4, 9, 3],
  [3, 4, 2, 11],
  [10, 9, 13, 15],
];
console.log(maxMoves(grid));

/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  const n = grid.length;
  const board = Array.from({ length: n * 3 }, () => Array.from({ length: n * 3 }, () => 0));

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === "/") {
        [board[y * 3 + 0][x * 3 + 0], board[y * 3 + 0][x * 3 + 1], board[y * 3 + 0][x * 3 + 2]] = [0, 0, 1];
        [board[y * 3 + 1][x * 3 + 0], board[y * 3 + 1][x * 3 + 1], board[y * 3 + 1][x * 3 + 2]] = [0, 1, 0];
        [board[y * 3 + 2][x * 3 + 0], board[y * 3 + 2][x * 3 + 1], board[y * 3 + 2][x * 3 + 2]] = [1, 0, 0];
      } else if (grid[y][x] === "\\") {
        [board[y * 3 + 0][x * 3 + 0], board[y * 3 + 0][x * 3 + 1], board[y * 3 + 0][x * 3 + 2]] = [1, 0, 0];
        [board[y * 3 + 1][x * 3 + 0], board[y * 3 + 1][x * 3 + 1], board[y * 3 + 1][x * 3 + 2]] = [0, 1, 0];
        [board[y * 3 + 2][x * 3 + 0], board[y * 3 + 2][x * 3 + 1], board[y * 3 + 2][x * 3 + 2]] = [0, 0, 1];
      } else {
        [board[y * 3 + 0][x * 3 + 0], board[y * 3 + 0][x * 3 + 1], board[y * 3 + 0][x * 3 + 2]] = [0, 0, 0];
        [board[y * 3 + 1][x * 3 + 0], board[y * 3 + 1][x * 3 + 1], board[y * 3 + 1][x * 3 + 2]] = [0, 0, 0];
        [board[y * 3 + 2][x * 3 + 0], board[y * 3 + 2][x * 3 + 1], board[y * 3 + 2][x * 3 + 2]] = [0, 0, 0];
      }
    }
  }

  let result = 0;
  for (let y = 0; y < n * 3; y++) {
    for (let x = 0; x < n * 3; x++) {
      if (board[y][x] === 0) {
        removeRegion(y, x);
        result++;
      }
    }
  }

  function removeRegion(y, x) {
    if (board[y] === undefined || board[y][x] === undefined || board[y][x] === 1) return;
    board[y][x] = 1;
    removeRegion(y, x + 1);
    removeRegion(y + 1, x);
    removeRegion(y, x - 1);
    removeRegion(y - 1, x);
  }

  return result;
};

const grid = 
["/\\","\\/"];
console.log(regionsBySlashes(grid));
[
  [ 0, 0, 1, 1, 0, 0 ],
  [ 0, 1, 0, 0, 1, 0 ],
  [ 1, 0, 0, 0, 0, 1 ],
  [ 1, 0, 0, 0, 0, 1 ],
  [ 0, 1, 0, 0, 1, 0 ],
  [ 0, 0, 1, 1, 0, 0 ]
]
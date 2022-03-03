/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const visited = {};
  let isSurrounded = true;

  function captureIfSurrounded(y, x) {
    if (visited[`${y}${x}`]) return;
    if (board[y] === undefined || board[y][x] === undefined || board[y][x] === "X") return;
    visited[`${y} ${x}`] = true;
    if (y === 0 || y === board.length - 1 || x === 0 || x === board[0].length - 1) {
      isSurrounded = false;
    }

    for (let d = 0; d < 4; d++) {
      captureIfSurrounded(y + dy[d], x + dx[d]);
    }
  }

  function capture(y, x) {
    if (board[y] === undefined || board[y][x] === undefined || board[y][x] === "X") return;
    board[y][x] = "X";
    for (let d = 0; d < 4; d++) {
      capture(y + dy[d], x + dx[d]);
    }
  }

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (y === 11 &&  x === 4) {
      }
      if (board[y][x] === "O" && !visited[`${y}${x}`]) {
        captureIfSurrounded(y, x);
        if (isSurrounded) capture(y, x);
        if (y === 11 &&  x === 4) {
        }
      }
      isSurrounded = true;
    }
  }
};

const board = [
  ["X", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "O", "X", "O", "X", "O", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "O", "O", "X", "X", "X", "X", "O", "O"],
  ["X", "O", "X", "O", "X", "X", "X", "X", "O", "X", "O", "X", "O", "X", "X", "O", "X", "X", "X", "X"],
  ["X", "O", "X", "X", "X", "X", "X", "X", "O", "X", "X", "O", "O", "X", "X", "X", "O", "X", "X", "X"],
  ["O", "X", "X", "X", "X", "X", "O", "X", "X", "O", "X", "O", "O", "X", "X", "X", "O", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "O", "X", "O", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "O", "X", "O", "X", "O", "X", "O", "X", "X"],
  ["O", "X", "X", "X", "X", "X", "X", "X", "O", "X", "O", "X", "X", "O", "X", "X", "X", "O", "O", "X"],
  ["O", "X", "O", "O", "O", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "O", "X", "O", "X", "O"],
  ["O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "O", "O", "O", "X", "X", "X", "X", "X", "X"],
  ["X", "O", "X", "X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "O", "X"],
  ["X", "X", "X", "X", "X", "X", "O", "X", "O", "X", "X", "O", "X", "O", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "X", "O"],
  ["X", "X", "O", "X", "O", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "O", "X", "X", "X", "O", "X", "X", "O", "O", "X"],
  ["X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "O", "X", "X", "X", "X", "X", "X"],
  ["X", "O", "O", "X", "X", "X", "O", "O", "X", "X", "O", "X", "X", "X", "O", "O", "X", "X", "X", "X"],
  ["X", "X", "X", "O", "X", "X", "O", "O", "O", "X", "O", "O", "X", "X", "X", "X", "O", "O", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "X", "O", "X", "O", "X"],
];

solve(board);
console.log(board);
[
  ["X", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "O"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O"],
  ["O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "O", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "O", "O", "O", "X", "X", "X", "X", "X", "X", "X", "O", "O", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "X", "O", "X", "O", "X"],
];

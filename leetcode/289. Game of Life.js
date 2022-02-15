/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const result = Array.from({ length: board.length }, () => Array.from({ length: board[0].length }, () => 0));
  // console.log(result);

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      const count = countNeighbor(y, x, board);
      if (board[y][x] === 1) result[y][x] = 1;
      if (board[y][x] === 1 && (count === 2 || count === 3)) result[y][x] = 1;
      else if (board[y][x] === 1 && count < 2) result[y][x] = 0;
      else if (board[y][x] === 1 && count > 3) result[y][x] = 0;
      else if (board[y][x] === 0 && count === 3) result[y][x] = 1;
    }
  }

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      board[y][x] = result[y][x];
    }
  }
};

function countNeighbor(y, x, board) {
  let count = 0;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (y + dy < 0 || x + dx < 0 || y + dy >= board.length || x + dx >= board[0].length) continue;
      if (dy === 0 && dx === 0) continue;
      if (board[y + dy][x + dx] === 1) count++;
    }
  }

  return count;
}

board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
console.log(gameOfLife(board));

// 새로운 board를 만드는게 아니라, 원래 있던 board를 직접 수정하면서 답을 만들 수 없을까.
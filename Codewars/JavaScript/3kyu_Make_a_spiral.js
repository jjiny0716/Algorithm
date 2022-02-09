const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function checkEnd(y, x, board, dir) {
  dir = (dir + 2) % 4; 
  for (let d = 0 ; d < 4 ; d++) {
    if (d == dir) continue;
    if (board[y + direction[d][0]][x + direction[d][1]] === 1) return true;
  }
  return false;
}

var spiralize = function (size) {
  const board = Array.from({ length: size + 4 }, (v, y) =>
    Array.from({ length: size + 4 }, (v, x) =>
      y == 0 || y == size + 3 ? 1 : x == 0 || x == size + 3 ? 1 : 0
    )
  );

  let dir = 0;
  for (let y = 2, x = 2 ; !checkEnd(y, x, board, dir); y += direction[dir][0], x += direction[dir][1]) {
    board[y][x] = 1;
    if (board[y + direction[dir][0] * 2][x + direction[dir][1] * 2] === 1) dir = (dir + 1) % 4;
  }
  
  return board.slice(2, size + 2).map((row) => row.slice(2, size + 2));
};

console.log(spiralize(5));

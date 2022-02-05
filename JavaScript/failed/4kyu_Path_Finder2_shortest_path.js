const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

function isValidPos(y, x, board) {
  if (y < 0 || x < 0 || y >= board.length || x >= board.length) return false;
  if (board[y][x] === "P" || board[y][x] === "W") return false;
  return true;
}

function findMinPath(y, x, length, min, board) {
  console.log(y, x);
  print(board);
  if (!isValidPos(y, x, board)) return board.length * board.length;
  if (y === board.length - 1 && x === board.length - 1) return length;
  if (length >= min || min === board.length * 2 - 2) return min

  let minLength = board.length * board.length;
  board[y][x] = "P";
  for (let i = 0; i < 4; i++) {
    minLength = Math.min(minLength, findMinPath(y + dy[i], x + dx[i], length + 1, minLength, board));
  }
  board[y][x] = ".";

  return minLength;
}

function pathFinder(maze) {
  const board = maze.split("\n").map((row) => row.split(""));
  //print(board);
  const result = findMinPath(0, 0, 0, board.length * board.length, board);
  return result === board.length * board.length ? false : result;
}

function print(board) {
  for (let row of board) {
    console.log(row.join(''));
  }
}
const maze = `..W..WW.WW
..WWWW..WW
.....W....
WW........
...WW.....
.W........
....W.WWWW
..........
.....W.W.W
W......WW.`;
console.time("maze");
console.log(pathFinder(maze));
console.timeEnd("maze");

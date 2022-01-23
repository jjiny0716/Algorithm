const directions = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];

function knight(start, finish) {
  const board = Array.from({length: 8}, () => Array.from({length: 8}, () => false));
  const st = getPosFromAN(start);
  const end = getPosFromAN(finish);

  return findAnswer(st[0], st[1], end, 0, board);
}

function getPosFromAN(n) {
  return [8 - n[1], n[0].charCodeAt() - 97];
}

function findAnswer(y, x, destination, count, board) {
  if (count > 6) return 7;
  if (y < 0 || x < 0 || y > 7 || x > 7 || board[y][x]) return 7;
  if (y == destination[0] && x == destination[1]) return count;

  let minCount = 999;
  board[y][x] = true;
  for (direction of directions) {
    minCount = Math.min(minCount, findAnswer(y + direction[0], x + direction[1], destination, count + 1, board));
  }
  board[y][x] = false;

  return minCount;
}

console.log(knight('a1', 'c1'));
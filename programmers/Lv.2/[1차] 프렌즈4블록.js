function solution(m, n, board) {
  board.forEach((row, i) => (board[i] = row.split("")));

  function check2x2AllSame(y, x) {
    if (board[y][x] === "x") return false;
    return board[y][x] === board[y][x + 1] && board[y][x + 1] === board[y + 1][x + 1] && board[y + 1][x + 1] === board[y + 1][x];
  }

  function removeAll2x2() {
    const shouldBeRemoved = new Set();

    for (let y = 0; y < m - 1; y++) {
      for (let x = 0; x < n - 1; x++) {
        if (check2x2AllSame(y, x)) {
          shouldBeRemoved.add(`${y} ${x}`);
          shouldBeRemoved.add(`${y} ${x + 1}`);
          shouldBeRemoved.add(`${y + 1} ${x}`);
          shouldBeRemoved.add(`${y + 1} ${x + 1}`);
        }
      }
    }

    for (let coord of shouldBeRemoved) {
      const [y, x] = coord.split(" ");
      board[y][x] = "x";
    }

    return shouldBeRemoved.size;
  }

  function fillAllEmptySpace() {
    for (let x = 0; x < n; x++) {
      const blocks = [];
      for (let y = 0; y < m; y++) {
        if (board[y][x] !== "x") blocks.push(board[y][x]);
      }

      for (let y = m - 1; y >= 0; y--) {
        board[y][x] = blocks.pop() || "x";
      }
    }
  }

  let result = 0;
  while (true) {
    const removedCount = removeAll2x2();
    if (!removedCount) break;
    result += removedCount;
    fillAllEmptySpace();
  }

  return result;
}

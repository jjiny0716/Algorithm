/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(b) {
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = new Set();
  const queue = [b];

  function boardToString(board) {
    return board.flat().join('');
  }

  let moveCount = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0 ; i < len ; i++) {
      const board = queue.shift();
      if (boardToString(board) === "123450") return moveCount;
      if (visited.has(boardToString(board))) continue;
      visited.add(boardToString(board))

      let zeroY = 0, zeroX = 0;
      outerLoop: for (let y = 0 ; y < 2 ; y++) {
        for (let x = 0 ; x < 3 ; x++) {
          if (board[y][x] === 0) {
            [zeroY, zeroX] = [y, x];
            break outerLoop;
          }
        }
      }

      for (let [dy, dx] of direction) {
        const [ny, nx] = [zeroY + dy, zeroX + dx];
        if (ny < 0 || nx < 0 || ny >= 2 || nx >= 3) continue;

        const newBoard = [[...board[0]], [...board[1]]];
        [newBoard[zeroY][zeroX], newBoard[ny][nx]] = [newBoard[ny][nx], newBoard[zeroY][zeroX]];
        if (visited.has(boardToString(newBoard))) queue.push(newBoard);
      }
    }

    moveCount++;
  }

  return -1;
};

const board = [[4,1,2],[5,0,3]];
console.log(slidingPuzzle(board));

// 배열을 다루는게 아니라, 문자열로 변환하여 다루면 속도 향상 가능
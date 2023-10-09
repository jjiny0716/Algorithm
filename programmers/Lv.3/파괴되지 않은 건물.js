function solution(board, skill) {
  const N = board.length;
  const M = board[0].length;
  const diffBoard = Array.from({ length: N }, () => new Array(M).fill(0));

  for (const [type, r1, c1, r2, c2, degree] of skill) {
    diffBoard[r1][c1] += degree * (type === 1 ? -1 : 1);
    if (c2 + 1 < M) diffBoard[r1][c2 + 1] += degree * (type === 1 ? 1 : -1);
    if (r2 + 1 < N) diffBoard[r2 + 1][c1] += degree * (type === 1 ? 1 : -1);
    if (r2 + 1 < N && c2 + 1 < M)
      diffBoard[r2 + 1][c2 + 1] += degree * (type === 1 ? -1 : 1);
  }

  for (let r = 0; r < N; r++) {
    for (let c = 1; c < M; c++) {
      diffBoard[r][c] += diffBoard[r][c - 1];
    }
  }

  for (let r = 1; r < N; r++) {
    for (let c = 0; c < M; c++) {
      diffBoard[r][c] += diffBoard[r - 1][c];
    }
  }

  let ans = 0;
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      if (board[r][c] + diffBoard[r][c] > 0) ans++;
    }
  }

  return ans;
}

const board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
skill = [
  [1, 1, 1, 2, 2, 4],
  [1, 0, 0, 1, 1, 2],
  [2, 2, 0, 2, 0, 100],
];

console.log(solution(board, skill));

function solution(board) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const N = board.length;
  let minCost = Infinity;

  const dp = Array.from({ length: N }, () => Array.from({ length: N }, () => Array.from({ length: 4 })));

  function findAllPossibleCircuit(y, x, currentDirection, cost) {
    if (cost >= minCost) return;
    if (y < 0 || x < 0 || y >= N || x >= N || board[y][x] === 1) return;
    if ((dp[y][x][currentDirection] || Infinity) <= cost) return;
    if (y === N - 1 && x === N - 1) {
      minCost = Math.min(minCost, cost);
      return;
    }

    dp[y][x][currentDirection] = cost;
    board[y][x] = 1;

    for (let i = 0; i < directions.length; i++) {
      const [dy, dx] = directions[i];
      findAllPossibleCircuit(y + dy, x + dx, i, i === currentDirection ? cost + 100 : cost + 500 + 100);
    }
    board[y][x] = 0;
  }

  findAllPossibleCircuit(0, 0, -1, -500);

  return minCost;
}

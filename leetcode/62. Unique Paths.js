/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let result = 1;
  const a = m + n - 2;
  const b = Math.min(m, n) - 1;
  for (let i = 1; i <= b; i++) {
    result = (result * (a - i + 1)) / i;
  }

  return Math.round(result);
};

console.log(uniquePaths(3, 7));

// 다른 방법
var uniquePaths2 = function (m, n) {
  if (m < 2 || n < 2) return 1;
  const graph = new Array(m).fill(0).map((v) => new Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // graph[i][j]는 i, j좌표로 갈수 있는 방법의 갯수를 나타낸다.
      graph[i][j] = graph[i - 1][j] + graph[i][j - 1];
    }
  }
  return graph[m - 1][n - 1];
};

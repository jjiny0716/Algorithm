/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  for (let y = n - 2; y >= 0; y--) {
    for (let x = 0; x < n; x++) {
      matrix[y][x] += Math.min(matrix[y + 1][x - 1] ?? Infinity, matrix[y + 1][x] ?? Infinity, matrix[y + 1][x + 1] ?? Infinity);
    }
  }

  return Math.min(...matrix[0]);
};

const matrix = [
  [100, 100, 100, 100],
  [100, 100, 100, 100],
  [100, 100, 100, 100],
  [100, 100, 100, 100],
];
console.log(minFallingPathSum(matrix));

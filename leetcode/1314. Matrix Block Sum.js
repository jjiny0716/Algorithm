/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      mat[y][x] += (mat[y - 1] ? mat[y - 1][x] : 0) + (mat[x - 1] ? mat[y][x - 1] : 0) - (mat[y - 1] && mat[x - 1] ? mat[y - 1][x - 1] : 0);
    }
  }
  const result = Array.from({ length: m }, () => Array.from({ length: n }));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // range
      const y1 = i - k < 0 ? 0 : i - k;
      const x1 = j - k < 0 ? 0 : j - k;
      const y2 = i + k >= m ? m - 1 : i + k;
      const x2 = j + k >= n ? n - 1 : j + k;
      // sum
      result[i][j] =
        mat[y2][x2] - (y1 - 1 < 0 ? 0 : mat[y1 - 1][x2]) - (x1 - 1 < 0 ? 0 : mat[y2][x1 - 1]) + (y1 - 1 < 0 || x1 - 1 < 0 ? 0 : mat[y1 - 1][x1 - 1]);
    }
  }
  return result;
};
[
  [12, 21, 16],
  [27, 45, 33],
  [24, 39, 28],
];
const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const k = 1;
console.log(matrixBlockSum(mat, k));

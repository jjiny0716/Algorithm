/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let result = 0;
  const n = mat.length;
  for (let i = 0; i < n; i++) {
    result += mat[i][i] + mat[i][n - i - 1];
  }
  if (n % 2 === 1) result -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
  return result;
};

const mat = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

console.log(diagonalSum(mat));

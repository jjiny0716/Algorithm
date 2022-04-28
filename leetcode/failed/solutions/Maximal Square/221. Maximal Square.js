/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let maxSize = 0;

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (matrix[y][x] === '0') continue;
      if (y === 0 || x === 0) {
        maxSize = Math.max(maxSize, 1);
        continue;
      }
      matrix[y][x] = Math.min(Number(matrix[y][x - 1]), Number(matrix[y - 1][x]), Number(matrix[y - 1][x - 1])) + 1;
      maxSize = Math.max(maxSize, matrix[y][x] ** 2);
    }
  }

  return maxSize;
};

const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];
console.log(maximalSquare(matrix));

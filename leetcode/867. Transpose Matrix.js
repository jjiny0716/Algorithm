/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const result = Array.from({ length: n }, () => Array.from({ length: m }));

  for (let y = 0 ; y < m ; y++) {
    for (let x = 0 ; x < n ; x++) {
      result[x][y] = matrix[y][x];
    }
  }

  return result;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transpose(matrix));

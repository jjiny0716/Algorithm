/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const rowMins = [];
  const colMaxes = [];

  for (let y = 0 ; y < m ; y++) {
    rowMins.push(Math.min(...matrix[y]));
  }

  for (let x = 0 ; x < n ; x++) {
    let max = 0;
    for (let y = 0 ; y < m ; y++) max = Math.max(max, matrix[y][x]);
    colMaxes.push(max);
  }

  const result = [];
  for (let y = 0 ; y < m ; y++) {
    for (let x = 0 ; x < n; x++) {
      if (rowMins[y] === colMaxes[x]) result.push(matrix[y][x]);
    }
  }

  return result;
};

const matrix = [
  [1, 10, 4, 2],
  [9, 3, 8, 7],
  [15, 16, 17, 12],
];
console.log(luckyNumbers(matrix));

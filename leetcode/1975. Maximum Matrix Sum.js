/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
  let negativeCount = 0;
  let sum = 0;
  let min = 10e4;

  for (let y = 0 ; y < matrix.length ; y++) {
    for (let x = 0 ; x < matrix[0].length ; x++) {
      if (matrix[y][x] < 0) negativeCount++;
      const value = Math.abs(matrix[y][x]);
      sum += value;
      min = Math.min(min, value);
    }
  }

  if (negativeCount % 2 === 1) sum -= min * 2;
  return sum;
};


const matrix = [[1,2,3],[-1,-2,-3],[1,2,3]];
console.log(maxMatrixSum(matrix));
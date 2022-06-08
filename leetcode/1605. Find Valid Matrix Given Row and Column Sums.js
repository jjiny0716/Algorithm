/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
  const m = rowSum.length;
  const n = colSum.length;
  const matrix = Array.from({ length: m }, () => Array.from({ length: n }));
  for (let y = 0 ; y < m ; y++) {
    for (let x = 0 ; x < n ; x++) {
      const min = Math.min(rowSum[y], colSum[x]);
      matrix[y][x] = min;
      rowSum[y] -= min;
      colSum[x] -= min;
    }
  }

  return matrix;
};

const rowSum = [5,7,10], colSum = [8,6,8];
console.log(restoreMatrix(rowSum, colSum));

/*
  0 2 8
0 5
0 3 4
10

  0 0 0
0 5 0 0
0 3 4 0
0 0 2 8
*/
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
  const map = new Map();
  for (let y = 0 ; y < matrix.length ; y++) {
    const rowStr = matrix[y].join('');
    const flippedRowStr = matrix[y].map((v) => v === 0 ? 1 : 0).join('');
    map.set(rowStr, (map.get(rowStr) || 0) + 1);
    map.set(flippedRowStr, (map.get(flippedRowStr) || 0) + 1);
    matrix[y] = rowStr;
  }
  
  return matrix.reduce((max, row) => Math.max(max, map.get(row)), 0);
};

const matrix = [[0,0,0],[0,0,1],[1,1,0]];
console.log(maxEqualRowsAfterFlips(matrix));
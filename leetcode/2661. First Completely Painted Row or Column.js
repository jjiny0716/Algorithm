/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
  const m = mat.length;
  const n = mat[0].length;
  const rowCount = new Array(m).fill(0);
  const colCount = new Array(n).fill(0);
  const numPosTable = new Map();
  for (let y = 0 ; y < m ; y++) {
    for (let x = 0 ; x < n ; x++) {
      numPosTable.set(mat[y][x], [y, x]);
    }
  }

  for (let i = 0 ; i < arr.length ; i++) {
    const [row, col] = numPosTable.get(arr[i]);
    if (++rowCount[row] === n) return i;
    if (++colCount[col] === m) return i;
  }

  return -1;
};

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  function sortOneDiagonalLine(mat, y, x) {
    const arr = [];
    for (let i = 0 ; y + i < mat.length && x + i < mat[0].length ; i++) {
      arr.push(mat[y + i][x + i]);
    }
    arr.sort((a, b) => a - b);
    let arrI = 0;
    for (let i = 0 ; y + i < mat.length && x + i < mat[0].length ; i++) {
      mat[y + i][x + i] = arr[arrI++];
    }
  }
  
  for (let y = 0 ; y < mat.length ; y++) {
    sortOneDiagonalLine(mat, y, 0);
  }
  for (let x = 1 ; x < mat[0].length ; x++) {
    sortOneDiagonalLine(mat, 0, x);
  }
  return mat;
};

const mat = [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]];
console.log(diagonalSort(mat));
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  if (mat.length * mat[0].length !== r * c) return mat;
  const resultMat = Array.from({length: r}, () => Array.from({length: c}).fill(0));
  mat = mat.flat(Infinity);

  for (let y = 0 ; y < r ; y++) {
    for (let x = 0 ; x < c ; x++) {
      resultMat[y][x] = mat[y * c + x];
    }
  }

  return resultMat;
};

const mat = [[1,2],[3,4]], r = 2, c = 2;
console.log(matrixReshape(mat, r, c));

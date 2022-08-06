/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const m = mat.length;
  const n = mat[0].length;
  const rowSum = new Array(m).fill(0);
  const colSum = new Array(n).fill(0);

  for (let y = 0 ; y < m ; y++) {
    for (let x = 0 ; x < n ; x++) {
      rowSum[y] += mat[y][x];
      colSum[x] += mat[y][x];
    }
  }

  let result = 0;
  for (let y = 0 ; y < m ; y++) {
    for (let x = 0 ; x < n ; x++) {
      if (mat[y][x] === 1  && rowSum[y] === 1 && colSum[x] === 1) result++;
    }
  }

  return result;
};

const mat = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
console.log(numSpecial(mat));

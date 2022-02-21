/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function (matrix) {
  const m = matrix.length, n = matrix[0].length;
  const yMap = new Map(), xMap = new Map();

  for (let y = 0 ; y < m ; y++) {
    for (let x = 0 ; x < n ; x++) {
      if (matrix[y][x] === 0) {
        yMap.set(y, true);
        xMap.set(x, true);
      }
    }
  }

  for (let y = 0 ; y < m ; y++) {
    for (let x = 0 ; x < n ; x++) {
      if (yMap.get(y) || xMap.get(x)) matrix[y][x] = 0;
    }
  }
};

matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
console.log(setZeroes(matrix));
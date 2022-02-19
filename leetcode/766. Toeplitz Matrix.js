/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  for (let y = matrix.length - 1 ; y >= 0 ; y--) {
    const num = matrix[y][0]; // memory
    let dy = 1, dx = 1;
    while (y + dy < matrix.length && dx < matrix[0].length) {
      if (matrix[y + dy][dx] !== num) return false;
      dy++;
      dx++;
    }
  }

  for (let x = 1 ; x < matrix[0].length ; x++) {
    const num = matrix[0][x]; // memory
    let dy = 1, dx = 1;
    while (dy < matrix.length && x + dx < matrix[0].length) {
      if (matrix[dy][x + dx] !== num) return false;
      dy++;
      dx++;
    }
  }

  return true;
};

console.log(isToeplitzMatrix([[11,74,0,93],[40,11,74,7]]));

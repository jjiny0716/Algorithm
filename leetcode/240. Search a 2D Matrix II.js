/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let y = 0, x = n - 1;
  while (y < m && x >= 0) {
    if (matrix[y][x] === target) return true;
    const left = matrix[y][0];
    const center = matrix[y][x];
    const bottom = matrix[m - 1][x];
    if (target >= left && target <= center) x--;
    else if (target >= center && target <= bottom) y++;
    else return false;
  }
  return false;
};

const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5;
console.log(searchMatrix(matrix, target));
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  let y = 0, x = 0, d = 0;
  const result = [];

  for (let i = 0 ; i < m * n ; i++) {
    result.push(matrix[y][x]);
    matrix[y][x] = "X";
    if (y + dy[d] < 0 || y + dy[d] >= m || x + dx[d] < 0 || x + dx[d] >= n || matrix[y + dy[d]][x + dx[d]] === "X") d = (d + 1) % 4;
    y += dy[d];
    x += dx[d];
  }

  return result;
};

const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix));

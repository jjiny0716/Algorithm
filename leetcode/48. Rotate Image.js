/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];

  function rotateLine(d) { 
    const size = matrix.length - d * 2 - 1;
    let dir = 0;
    const count = 4 * (size) || 1;
    const coords = [];
    let y = d, x = d;
    for (let c = 0 ; c < count ; c++) {
      coords.push([y, x]);
      if (y + dy[dir] < d || x + dx[dir] < d || y + dy[dir] > d + size || x + dx[dir] > d + size) dir = (dir + 1) % 4;
      y += dy[dir];
      x += dx[dir];
    }

    for (let i = 0 ; i < size ; i++) {
      let tmp = matrix[coords[i][0]][coords[i][1]];
      for (let coord = i ; coord < coords.length - size; coord += size) {
        [matrix[coords[coord + size][0]][coords[coord + size][1]], tmp] = [tmp, matrix[coords[coord + size][0]][coords[coord + size][1]]];
      }
      matrix[coords[i][0]][coords[i][1]] = tmp;
    }
  }

  for (let d = 0 ; d < Math.round(matrix.length / 2) ; d++) rotateLine(d);

  return true;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));

// A common method to rotate the image
// https://leetcode.com/problems/rotate-image/discuss/18872/A-common-method-to-rotate-the-image
// https://leetcode.com/problems/rotate-image/discuss/430066/JavaScript-Solution
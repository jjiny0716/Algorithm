/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const matrix = Array.from({length: n}, () => Array.from({length: n}));
  
  let x = 0, y = 0, d = 0;
  for (let i = 1 ; i <= n * n ; i++) {
    matrix[y][x] = i;
    let ny = y + dy[d];
    let nx = x + dx[d];
    if (ny < 0 || nx < 0 || ny >= n || nx >= n || matrix[ny][nx] !== undefined) {
      d = (d + 1) % 4;
      ny = y + dy[d];
      nx = x + dx[d];
    }
    x = nx;
    y = ny;
  }

  return matrix;
};


console.log(generateMatrix(4));
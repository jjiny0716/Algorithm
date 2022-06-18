/**
 * @param {number[][]} mat
 * @return {number}
 */
var minFlips = function (mat) {
  const flipDirections = [
    [0, 0],
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const m = mat.length;
  const n = mat[0].length;
  const visited = new Set();
  const queue = [];
  queue.push(mat);
  visited.add(JSON.stringify(mat));

  let steps = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const matrix = queue.shift();
      if (matrix.reduce((sum, row) => (sum += row.reduce((sum, value) => sum += value, 0)), 0) === 0) return steps;

      for (let y = 0; y < m; y++) {
        for (let x = 0; x < n; x++) {
          const flipedMatrix = flip(y, x, matrix);
          const matrixString = JSON.stringify(flipedMatrix);
          if (visited.has(matrixString)) continue;
          visited.add(matrixString);
          queue.push(flipedMatrix);
        }
      }
    }
    steps++;
  }

  function flip(fy, fx, matrix) {
    const newMatrix = Array.from({ length: m }, () => Array.from({ length: n }));
    for (let y = 0; y < m; y++) {
      for (let x = 0; x < n; x++) {
        newMatrix[y][x] = matrix[y][x];
      }
    }

    for (let [dy, dx] of flipDirections) {
      const [ny, nx] = [fy + dy, fx + dx];
      if (ny < 0 || nx < 0 || ny >= m || nx >= n) continue;
      newMatrix[ny][nx] = newMatrix[ny][nx] ? 0 : 1;
    }

    return newMatrix;
  }

  return -1;
};

const mat = [
  [0, 0],
  [0, 1],
];
console.log(minFlips(mat));

console.log(JSON.stringify(mat));

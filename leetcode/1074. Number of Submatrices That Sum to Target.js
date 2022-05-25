/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      matrix[y][x] = -(matrix?.[y - 1]?.[x - 1] || 0) + (matrix?.[y - 1]?.[x] || 0) + (matrix?.[y]?.[x - 1] || 0) + matrix[y][x];
    }
  }

  let result = 0;
  for (let height = 1; height <= m; height++) {
    for (let y = 0; y < m - height + 1; y++) {
      const sumMap = new Map().set(0, 1);
      for (let x = 0; x < n; x++) {
        const sum = matrix[y + height - 1][x] - (matrix[y - 1]?.[x] || 0);
        result += sumMap.get(sum - target) || 0;
        sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
      }
    }
  }

  return result;
};

const matrix = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
  target = 0;
console.log(numSubmatrixSumTarget(matrix, target));

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let direction = 1;
  let y = 0, x = 0;
  const result = [];

  for (let i = 0 ; i < mat.length + mat[0].length - 1 ; i++) {
    y = Math.min(mat.length - 1, i);
    x = Math.max(0, i - mat.length + 1);
    const arr = [];

    while (!(mat[y] === undefined || mat[y][x] === undefined)) {
      arr.push(mat[y][x]);
      y += -1;
      x += 1;
    }

    direction === 1 ? result.push(...arr) : result.push(...arr.reverse());
    direction *= -1;
  }

  return result;
};

const mat = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(findDiagonalOrder(mat));

// 개선
var findDiagonalOrder2 = function (matrix) {
  const width = matrix[0].length;
  const height = matrix.length;
  const result = Array.from({length: width + height - 1}, () => []);

  for (let y = 0; y < height; y++) {
    for (let x = 0 ; x < width ; x++) {
      result[y + x].push(matrix[y][x]);
    }
  }
  
  return result.map((arr, index) => index % 2 === 0 ? arr.reverse() : arr).flat();
}

console.log(findDiagonalOrder2(mat));

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function (matrix, k) {
  const values = [];
  const valueMatrix = Array.from({length: matrix.length}, () => Array.from({length: matrix[0].length}))
  
  for (let y = 0 ; y < matrix.length ; y++) {
    for (let x = 0 ; x < matrix[0].length ; x++) {
      console.log(y, x);
      if (y === 0 && x === 0) valueMatrix[y][x] = matrix[y][x];
      else if (y === 0) valueMatrix[y][x] = valueMatrix[y][x - 1] ^ matrix[y][x];
      else if (x === 0) valueMatrix[y][x] = valueMatrix[y - 1][x] ^ matrix[y][x];
      else valueMatrix[y][x] = valueMatrix[y - 1][x] ^ valueMatrix[y][x - 1] ^ valueMatrix[y - 1][x - 1] ^ matrix[y][x];
      values.push(valueMatrix[y][x]);
    }
  }
  
  values.sort((a, b) => b - a);
  return values[k - 1];
};

console.log(kthLargestValue([[8,10,5,8,5,7,6,0,1,4,10,6,4,3,6,8,7,9,4,2]], 2));
console.log(5^2^1^6);

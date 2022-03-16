/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const width = mat[0].length;
  const height = mat.length;
  const result = Array.from({length: height}, () => {return Array.from({length: width}, () => -1)});
  let coords = [];

  function getCoordsAroundEqualToTarget(y, x, target, matrix) {
    const coords = [];
    if (matrix[y] !== undefined && matrix[y][x + 1] !== undefined && matrix[y][x + 1] === target) coords.push([y, x + 1]);
    if (matrix[y + 1] !== undefined && matrix[y + 1][x] !== undefined && matrix[y + 1][x] === target) coords.push([y + 1, x]);
    if (matrix[y] !== undefined && matrix[y][x - 1] !== undefined && matrix[y][x - 1] === target) coords.push([y, x - 1]);
    if (matrix[y - 1] !== undefined && matrix[y - 1][x] !== undefined && matrix[y - 1][x] === target) coords.push([y - 1, x]);
    return coords;
  }
  
  for (let y = 0 ; y < height ; y++) {
    for (let x = 0 ; x < width ; x++) {
      if (mat[y][x] === 0) result[y][x] = 0;
      else {
        if (getCoordsAroundEqualToTarget(y, x, 0, mat).length > 0) {
          result[y][x] = 1;
          coords.push([y, x]);
        }
      }
    }
  }
  
  for (let level = 2 ; ; level++) {
    if (coords.length === 0) break;
    const newCoords = [];
    for (let coord of coords) {
      const targetCoords = getCoordsAroundEqualToTarget(coord[0], coord[1], -1, result);
      for (let targetCoord of targetCoords) {
        result[targetCoord[0]][targetCoord[1]] = level;
        newCoords.push([...targetCoord]);
      }
    }
    coords = newCoords;
  }

  return result;
};

const mat = [[0,0,0],[0,1,0],[1,1,1]];
console.log(updateMatrix(mat));

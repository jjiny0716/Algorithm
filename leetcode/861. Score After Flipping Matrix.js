/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
  const width = grid[0].length;
  const height = grid.length;

  function changeColumn(x) {
    for (let y = 0 ; y < height ; y++) {
      grid[y][x] = grid[y][x] === 0 ? 1 : 0;
    }
  }

  function changeRow(y) {
    for (let x = 0 ; x < width ; x++) {
      grid[y][x] = grid[y][x] === 0 ? 1 : 0;
    }
  }

  for (let y = 0 ; y < height ; y++) {
    if (grid[y][0] === 0) changeRow(y);
  }

  for (let x = 0 ; x < width ; x++) {
    let zeroCount = 0;
    for (let y = 0 ; y < height ; y++) {
      if (grid[y][x] === 0) zeroCount++;
      if (zeroCount > height / 2) break;
    }
    if (zeroCount > height / 2) changeColumn(x);
  }

  return grid.map(binaryArr => parseInt(binaryArr.join(''), 2)).reduce((sum, value) => sum += value, 0);
};

//39
const grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]];
console.log(matrixScore(grid));


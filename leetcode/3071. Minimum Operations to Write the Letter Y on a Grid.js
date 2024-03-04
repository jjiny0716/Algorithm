/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperationsToWriteY = function (grid) {
  const yCount = [0, 0, 0];
  const nonYCount = [0, 0, 0];
  let nonYCellCount = 0;
  const n = grid.length;
  const halfN = Math.floor(grid.length / 2);
  
  for (let x = 0, y = 0; y < halfN ; x++, y++) {
    yCount[grid[y][x]]++;
    grid[y][x] = -1;
  }
  for (let x = n - 1, y = 0; y < halfN ; x--, y++) {
    yCount[grid[y][x]]++;
    grid[y][x] = -1;
  }
  for (let y = halfN; y < grid.length ; y++) {
    yCount[grid[y][halfN]]++;
    grid[y][halfN] = -1;
  }
  
  for (let y = 0 ; y < n ; y++) {
    for (let x = 0 ; x < n ; x++) {
      if (grid[y][x] === -1) continue;
      nonYCount[grid[y][x]]++;
      nonYCellCount++;
    }
  }
  
  const yCellCount = n * n - nonYCellCount;
  
  return Math.min((yCellCount - yCount[0]) + (nonYCellCount - nonYCount[1]),
                  (yCellCount - yCount[0]) + (nonYCellCount - nonYCount[2]),
                  (yCellCount - yCount[1]) + (nonYCellCount - nonYCount[0]),
                  (yCellCount - yCount[1]) + (nonYCellCount - nonYCount[2]),
                  (yCellCount - yCount[2]) + (nonYCellCount - nonYCount[0]),
                  (yCellCount - yCount[2]) + (nonYCellCount - nonYCount[1]));
};

const grid = [
  [0, 1, 0, 1, 0],
  [2, 1, 0, 1, 2],
  [2, 2, 2, 0, 1],
  [2, 2, 2, 2, 2],
  [2, 1, 2, 2, 2],
];
console.log(minimumOperationsToWriteY(grid));

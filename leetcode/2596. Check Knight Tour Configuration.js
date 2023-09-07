/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function (grid) {
  const n = grid.length;
  const coordMap = {};
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      coordMap[grid[y][x]] = [y, x];
    }
  }

  if (coordMap[0][0] !== 0 || coordMap[0][1] !== 0) return false;

  const move = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
  ];
  for (let i = 0; i < n * n - 1; i++) {
    const [y, x] = coordMap[i];
    const [ny, nx] = coordMap[i + 1];

    let isMovable = false;
    for (const [dy, dx] of move) {
      if (y + dy === ny && x + dx === nx) {
        isMovable = true;
        break;
      }
    }
    if (!isMovable) return false;
  }

  return true;
};


const grid = [[0,3,6],[5,8,1],[2,7,4]];
console.log(checkValidGrid(grid));

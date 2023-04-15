/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, row, col, color) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const targetColor = grid[row][col];
  const visited = new Set();
  const borderCells = [];

  const serializeCoord = (x, y) => `${x} ${y}`;

  const dfs = (y, x) => {
    if (y < 0 || x < 0 || y >= grid.length || x > grid[0].length) return 0;
    if (grid[y][x] !== targetColor) return 0;
    if (visited.has(serializeCoord(x, y))) return 1;

    visited.add(serializeCoord(x, y));

    const countOfAdjacentSameColor = directions.reduce((prev, [dy, dx]) => prev + dfs(y + dy, x + dx), 0);
    if (countOfAdjacentSameColor != 4) borderCells.push([y, x]);

    return 1;
  };
  dfs(row, col);
  for (const [y, x] of borderCells) {
    grid[y][x] = color;
  }

  return grid;
};

const grid = [
    [1, 2, 2],
    [2, 3, 2],
  ],
  row = 0,
  col = 1,
  color = 3;
console.log(colorBorder(grid, row, col, color));

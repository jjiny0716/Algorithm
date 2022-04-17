/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function (grid) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const m = grid.length;
  const n = grid[0].length;
  
  function findCycle(y, x, lastY, lastX, length, letter) {
    if (y < 0 || x < 0 || y >= m || x >= n) return false;
    if (!(grid[y][x] === letter || grid[y][x] === letter.toUpperCase())) return false;
    if (letter.toUpperCase() === grid[y][x]) {
      if (length >= 4) return true;
      return false;
    }

    grid[y][x] = letter.toUpperCase();

    let result = false;
    for (let d = 0; d < 4; d++) {
      const [ny, nx] = [y + directions[d][0], x + directions[d][1]];
      if (ny === lastY && nx === lastX) continue;
      result = result || findCycle(ny, nx, y, x, length + 1, letter);
    }
    return result;
  }

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      const letter = grid[y][x];
      if (letter.toLowerCase() !== letter) continue;
      if (findCycle(y, x, -1, -1, 1, grid[y][x])) return true;
    }
  }

  return false;
};

const grid = [
  ["a", "a", "a", "a"],
  ["a", "b", "b", "a"],
  ["a", "b", "b", "a"],
  ["a", "a", "a", "a"],
];
console.log(containsCycle(grid));

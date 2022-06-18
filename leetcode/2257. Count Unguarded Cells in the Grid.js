/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function (m, n, guards, walls) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let guardedCount = 0;
  const matrix = Array.from({ length: m }, () => Array.from({ length: n }));
  for (let [y, x] of walls) {
    matrix[y][x] = "W";
    guardedCount++;
  }
  for (let [y, x] of guards) {
    matrix[y][x] = "G";
    guardedCount++;
  }

  for (let [y, x] of guards) {
    for (let [dy, dx] of directions) {
      goStraight(y + dy, x + dx, dy, dx);
    }
  }

  function goStraight(y, x, dy, dx) {
    if (y < 0 || x < 0 || y >= m || x >= n) return;
    if (matrix[y][x] === "W" || matrix[y][x] === "G") return;
    if (matrix[y][x] !== "V") guardedCount++;
    matrix[y][x] = "V";
    goStraight(y + dy, x + dx, dy, dx);
  }

  return m * n - guardedCount;
};

const m = 2,
  n = 7,
  guards = [
    [1, 5],
    [1, 1],
    [1, 6],
    [0, 2],
  ],
  walls = [
    [0, 6],
    [0, 3],
    [0, 5],
  ];
console.log(countUnguarded(m, n, guards, walls));

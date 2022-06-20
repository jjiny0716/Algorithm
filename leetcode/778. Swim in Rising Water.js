/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const n = grid.length;

  function isReachable(t) {
    const queue = [[0, 0]];
    const visited = new Set();
    while (queue.length) {
      const [y, x] = queue.pop();
      if (y === n - 1 && x === n - 1) return true;
      visited.add(`${y} ${x}`);
      for (let [dy, dx] of directions) {
        const [ny, nx] = [y + dy, x + dx];
        if (ny < 0 || nx < 0 || ny >= n || nx >= n || grid[ny][nx] > t) continue;
        if (visited.has(`${ny} ${nx}`)) continue;
        queue.push([ny, nx]);
      }
    }

    return false;
  }

  let left = grid[0][0], right = n ** 2 - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log(left, right);
    if (isReachable(mid)) right = mid - 1;
    else left = mid + 1;
    isPathExist = false;
  }

  return left;
};

const grid = [
  [0, 2],
  [1, 3],
];
console.log(swimInWater(grid));

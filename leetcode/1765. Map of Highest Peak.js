/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const m = isWater.length;
  const n = isWater[0].length;
  const result = Array.from({ length: m }, () => Array.from({ length: n }));
  let queue = [];

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (isWater[y][x] === 1) {
        queue.push([y, x]);
        result[y][x] = 0;
      }
    }
  }

  let height = 1;
  while (queue.length) {
    const nextQueue = [];
    for (let [y, x] of queue) {
      for (let [dy, dx] of directions) {
        const [ny, nx] = [y + dy, x + dx];
        if (ny < 0 || nx < 0 || ny >= m || nx >= n) continue;
        if (result[ny][nx] === undefined) {
          result[ny][nx] = height;
          nextQueue.push([ny, nx]);
        }
      }
    }

    height++;
    queue = nextQueue;
  }

  return result;
};

const isWater = [
  [0, 1],
  [0, 1],
];
console.log(highestPeak(isWater));

[
  [1, 0],
  [1, 1],
];

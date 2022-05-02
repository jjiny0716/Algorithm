function solution(maps) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const n = maps.length;
  const m = maps[0].length;
  const queue = [[0, 0]];

  function isValid(y, x) {
    if (y < 0 || x < 0 || y >= n || x >= m || maps[y][x] === 0) return false;
    return true;
  }

  let steps = 1;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [y, x] = queue.shift();

      if (y === n - 1 && x === m - 1) return steps;
      for (let direction of directions) {
        const [dy, dx] = direction;
        const [ny, nx] = [y + dy, x + dx];
        if (isValid(ny, nx)) {
          queue.push([ny, nx]);
          maps[ny][nx] = 0;
        }
      }
    }
    steps++;
  }

  return -1;
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
console.log(solution(maps));

function solution(maps) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const n = maps.length;
  const m = maps[0].length;
  const queue = [[0, 0, 1]];

  function isValid(y, x) {
    if (y < 0 || x < 0 || y >= n || x >= m || maps[y][x] === 0) return false;
    return true;
  }

  while (queue.length) {
    const [y, x, steps] = queue.shift();
    if (y === n - 1 && x === m - 1) return steps;
    
    for (let direction of directions) {
      const [dy, dx] = direction;
      const [ny, nx] = [y + dy, x + dx];
      if (isValid(ny, nx)) {
        queue.push([ny, nx, steps + 1]);
        maps[ny][nx] = 0;
      }
    }
  }

  return -1;
}

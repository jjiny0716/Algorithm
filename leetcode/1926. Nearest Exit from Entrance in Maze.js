/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const queue = [[...entrance]];
  const visited = new Set();
  let step = 0;
  while (queue.length) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const [y, x] = queue.shift();
      if ((y === 0 || x === 0 || y === maze.length - 1 || x === maze[0].length - 1) && step !== 0) return step;
      if (visited.has(`${y} ${x}`)) continue;
      visited.add(`${y} ${x}`);

      for (const [dy, dx] of directions) {
        const [ny, nx] = [y + dy, x + dx];
        if (visited.has(`${ny} ${nx}`)) continue;
        if (ny < 0 || nx < 0 || ny >= maze.length || nx >= maze[0].length) continue;
        if (maze[ny][nx] === '+') continue;
        queue.push([ny, nx]);
      }
    }
    step++;
  }

  return -1;
};

const maze = [
  ["+", "+", "+"],
  [".", ".", "."],
  ["+", "+", "+"],
];
const entrance = [1, 0];
console.log(nearestExit(maze, entrance));

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  const direction = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  const obstacleSet = new Set();
  for (let [x, y] of obstacles) {
    obstacleSet.add(`${x} ${y}`);
  } 
  let y = 0, x = 0, d = 0;
  let maxDistance = 0;

  for (let command of commands) {
    switch(command) {
      case -1:
        d = (d + 1) % 4;
        break;
      case -2:
        d = (d - 1 + 4) % 4;
        break;
      default:
      for (let i = 0 ; i < command ; i++) {
        const [dy, dx] = direction[d];
        if (obstacleSet.has(`${x + dx} ${y + dy}`)) break;
        [y, x] = [y + dy, x + dx];
        maxDistance = Math.max(maxDistance, y ** 2 + x ** 2);
      }
    }
  }

  return maxDistance;
};

const  commands = [4,-1,4,-2,4], obstacles = [[2,4], [3, 2]];
console.log(robotSim(commands, obstacles));
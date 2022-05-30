/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  const directions = {
    N: [-1, 0],
    S: [1, 0],
    E: [0, 1],
    W: [0, -1],
  }

  const visited = { "0 0": true };
  let y = 0, x = 0;
  for (let p of path) {
    const [dy, dx] = directions[p];
    y += dy;
    x += dx;
    if (visited[`${y} ${x}`]) return true;
    visited[`${y} ${x}`] = true;
  }

  return false;
};

const path = "NESWW";
console.log(isPathCrossing(path));
function solution(maps) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  const serializeCoord = (y, x) => `${y}|${x}`;
  const visited = new Set();
  const dfs = (y, x) => {
    if (y < 0 || x < 0 || y >= maps.length || x >= maps[0].length) return 0;
    if (maps[y][x] === 'X') return 0;
    if (visited.has(serializeCoord(y, x))) return 0;

    visited.add(serializeCoord(y, x));

    let food = Number(maps[y][x]);
    for (const [dy, dx] of directions) {
      food += dfs(y + dy, x + dx);
    }

    return food;
  }

  const ans = [];
  for (let y = 0 ; y < maps.length ; y++) {
    for (let x = 0 ; x < maps[0].length ; x++) {
      if (maps[y][x] !== 'X' && !visited.has(serializeCoord(y, x))) ans.push(dfs(y, x))
    }
  }

  if (!ans.length) ans.push(-1);
  return ans.sort((a, b) => a - b);
}

const maps = ["X591X", "X1X5X", "X231X", "1XXX1"];
console.log(solution(maps));

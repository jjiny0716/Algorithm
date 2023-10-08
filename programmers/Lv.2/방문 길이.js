function solution(dirs) {
  const dir = {
    'U': [1, 0],
    'D': [-1, 0],
    'R': [0, 1],
    'L': [0, -1],
  }

  let y = 0, x = 0;
  const set = new Set();
  for (const d of dirs) {
    const [dy, dx] = dir[d];
    const [nextY, nextX] = [y + dy, x + dx];
    if (nextY > 5 || nextY < -5 || nextX > 5 || nextX < -5) continue;
    set.add(`${y}${x}${nextY}${nextX}`);
    set.add(`${nextY}${nextX}${y}${x}`);
    y = nextY;
    x = nextX;
  }

  return set.size / 2;
}

const dirs = "LLLLLLLLLLLLLLLDDDDDDDDDDDDUUUUUUUUUUUUUUUUU";
console.log(solution(dirs));
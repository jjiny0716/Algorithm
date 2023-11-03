function solution(n) {
  const matrix = Array.from({ length: n }, (v, i) => new Array(i + 1));
  const directions = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];
  let direction = 0; // 0, 1, 2
  let x = 0,
    y = 0;
  for (let i = 1; i <= (n * (n + 1)) / 2; i++) {
    matrix[y][x] = i;
    if (direction === 0 && (y + 1 === n || matrix[y + 1][x])) direction = 1;
    else if (direction === 1 && (x + 1 === n || matrix[y][x + 1]))
      direction = 2;
    else if (direction === 2 && (y === 0 || matrix[y - 1][x - 1]))
      direction = 0;

    const [dy, dx] = directions[direction];
    y += dy;
    x += dx;
  }

  return matrix.flat();
}

const n = 6;
console.log(solution(n));

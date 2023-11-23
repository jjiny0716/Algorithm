function solution(land) {
  const n = land.length;
  const m = land[0].length;
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  const countOilLand = (initY, initX, visitedX) => {
    const stack = [[initY, initX]];
    let totalOil = 0;
    while (stack.length) {
      const [y, x] = stack.pop();
      if (y < 0 || x < 0 || y >= n || x >= m) continue;
      if (land[y][x] === 0) continue;

      visitedX.add(x);
      land[y][x] = 0;
      totalOil++;

      for (const [dy, dx] of directions) {
        stack.push([y + dy, x + dx]);
      }
    }

    return totalOil;
  };

  const possibleOilInX = new Array(m).fill(0);
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      const visitedX = new Set();
      const oil = countOilLand(y, x, visitedX);

      for (const x of visitedX) {
        possibleOilInX[x] += oil;
      }
    }
  }

  return Math.max(...possibleOilInX);
}

const land = [
  [0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 1, 1],
];

console.log(solution(land));

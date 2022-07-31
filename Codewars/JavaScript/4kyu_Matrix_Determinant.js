function determinant(m) {
  const n = m.length;
  if (n === 1) return m[0][0];
  else if (n === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  else {
    return m[0].reduce((prev, cur, x) => prev + cur * determinant(makeMinor(x)) * (x % 2 === 0 ? 1 : -1), 0);
  }

  function makeMinor(targetX, targetY = 0) {
    const result = [];
    for (let y = 0; y < n; y++) {
      if (y === targetY) continue;
      const row = [];
      for (let x = 0; x < n; x++) {
        if (x === targetX) continue;
        row.push(m[y][x]);
      }
      result.push(row);
    }

    return result;
  }
}

const matrix = [
  [2, 4, 2],
  [3, 1, 1],
  [1, 2, 0],
];
console.log(determinant(matrix));

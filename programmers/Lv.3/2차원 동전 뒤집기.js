function solution(beginning, target) {
  const n = beginning.length;
  const m = beginning[0].length;
  const reverseBit = (r, c) => (beginning[r][c] = beginning[r][c] ? 0 : 1);
  const reverseRow = (r) => {
    for (let c = 0; c < m; c++) {
      reverseBit(r, c);
    }
  };
  const reverseCol = (c) => {
    for (let r = 0; r < n; r++) {
      reverseBit(r, c);
    }
  };
  const isRowSameWithTarget = (r) =>
    beginning[r].every((bit, c) => bit === target[r][c]);

  const isTargetMakableByReverseRow = (r = 0) => {
    if (r === n) return 0; 
    if (isRowSameWithTarget(r)) return isTargetMakableByReverseRow(r + 1);
    else {
      reverseRow(r);
      if (!isRowSameWithTarget(r)) return -9999;
      const count = isTargetMakableByReverseRow(r + 1);
      reverseRow(r);
      return count + 1;
    }
  };

  let ans = 0, count = 0;
  const changedCols = [];
  for (let c = 0 ; c < m ; c++) {
    if (beginning[0][c] !== target[0][c]) {
      reverseCol(c);
      changedCols.push(c);
      count++;
    }
  }
  count += isTargetMakableByReverseRow();
  ans = count;
  count = 0;

  for (const c of changedCols) reverseCol(c);
  reverseRow(0);
  count++;
  for (let c = 0 ; c < m ; c++) {
    if (beginning[0][c] !== target[0][c]) {
      reverseCol(c);
      changedCols.push(c);
      count++;
    }
  }
  count += isTargetMakableByReverseRow();
  ans = Math.min(ans, count);

  return ans >= 0 ? ans : -1;
}

const beginning = [
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
  ],
  target = [
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
  ];
console.log(solution(beginning, target));

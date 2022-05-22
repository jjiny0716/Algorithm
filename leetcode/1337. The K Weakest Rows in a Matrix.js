/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  return mat
    .map((row, i) => [row.reduce((prev, cur) => (prev += cur), 0), i])
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
    .slice(0, k)
    .map(([strength, i]) => i);
};

const mat = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  k = 3;
console.log(kWeakestRows(mat, k));

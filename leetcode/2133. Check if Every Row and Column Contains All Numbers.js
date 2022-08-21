/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const n = matrix.length;
  const rowSets = Array.from({ length: n }, () => new Set());
  const colSets = Array.from({ length: n }, () => new Set());

  for (let y = 0 ; y < n ; y++) {
    for (let x = 0 ; x < n; x++) {
      const e = matrix[y][x];
      rowSets[y].add(e);
      colSets[x].add(e);
    }
  }

  return rowSets.every((set) => set.size === n) && colSets.every((set) => set.size === n)
};

const matrix = [
  [1, 2, 3],
  [3, 1, 2],
  [2, 3, 1],
];
console.log(checkValid(matrix));

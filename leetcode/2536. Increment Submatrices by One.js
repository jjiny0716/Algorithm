/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function (n, queries) {
  const ans = Array.from({ length: n }, () => new Array(n).fill(0));

  for (const [row1, col1, row2, col2] of queries) {
    ans[row1][col1]++;
    if (col2 + 1 < n) ans[row1][col2 + 1]--;
    if (row2 + 1 < n) ans[row2 + 1][col1]--;
    if (col2 + 1 < n && row2 + 1 < n) ans[row2 + 1][col2 + 1]++;
  }

  for (let y = 0 ; y < n ; y++) {
    for (let x = 1 ; x < n ; x++) {
      ans[y][x] += ans[y][x - 1];
    }
  }

  for (let x = 0 ; x < n ; x++) {
    for (let y = 1 ; y < n ; y++) {
      ans[y][x] += ans[y - 1][x];
    }
  }

  return ans;
};

const n = 3,
  queries = [
    [1, 1, 2, 2],
    [0, 0, 1, 1],
  ];
console.log(rangeAddQueries(n, queries));

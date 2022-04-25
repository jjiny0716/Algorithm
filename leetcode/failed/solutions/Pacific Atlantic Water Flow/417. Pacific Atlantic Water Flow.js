/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  const flowTo = Array.from({ length: m }, () => Array.from({ length: n }, () => { return {pacific: false, atlantic: false} }));
  function findPositionToFlow(y, x, last, ocean) {
    if (y < 0 || x < 0 || y >= m || x >= n || heights[y][x] < last) return;
    if (flowTo[y][x][ocean]) return;
    flowTo[y][x][ocean] = true;
    const height = heights[y][x];
    findPositionToFlow(y, x + 1, height, ocean);
    findPositionToFlow(y + 1, x, height, ocean);
    findPositionToFlow(y, x - 1, height, ocean);
    findPositionToFlow(y - 1, x, height, ocean);
  }

  for (let y = 0; y < m; y++) findPositionToFlow(y, 0, 0, "pacific");
  for (let x = 0; x < n; x++) findPositionToFlow(0, x, 0, "pacific");

  for (let y = 0; y < m; y++) findPositionToFlow(y, n - 1, 0, "atlantic");
  for (let x = 0; x < n; x++) findPositionToFlow(m - 1, x, 0, "atlantic");

  const result = [];
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (flowTo[y][x].pacific && flowTo[y][x].atlantic) result.push([y, x]);
    }
  }
  return result;
};

const heights = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
console.log(pacificAtlantic(heights));

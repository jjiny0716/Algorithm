/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const islandWidth = heights[0].length;
  const islandHeight = heights.length;
  const flowMap = Array.from({ length: islandHeight }, () => Array.from({ length: islandWidth }, () => null));
  let visited = {};
  const result = [];

  function findWhereToFlow(y, x) {
    if (y < 0 || x < 0) return [true, false];
    else if (y >= islandHeight || x >= islandWidth) return [false, true];
    if (flowMap[y][x] !== null || visited[`${y} ${x}`]) return flowMap[y][x];
    visited[`${y} ${x}`] = true;
    if (y === 0 || x === 0 || y === islandHeight - 1 || x === islandWidth - 1) {
      flowMap[y][x] = [false, false];
      if (x === 0 || y === 0) flowMap[y][x][0] = true;
      if (x === islandWidth - 1 || y === islandHeight - 1) flowMap[y][x][0] = true;
    }

    for (let d = 0; d < 4; d++) {
      const flowResult =
        heights[y + dy[d]] === undefined || heights[y + dy[d]][x + dx[d]] === undefined || heights[y][x] >= heights[y + dy[d]][x + dx[d]]
          ? findWhereToFlow(y + dy[d], x + dx[d])
          : null;

      if (flowResult === null) continue;
      if (flowMap[y][x] === null) flowMap[y][x] = [...flowResult];
      else {
        flowMap[y][x][0] = flowMap[y][x][0] || flowResult[0];
        flowMap[y][x][1] = flowMap[y][x][1] || flowResult[1];
      }
    }

    return flowMap[y][x];
  }

  for (let y = 0; y < islandHeight; y++) {
    for (let x = 0; x < islandWidth; x++) {
      if (flowMap[y][x] === null) {
        findWhereToFlow(y, x);
        visited = {};
      }
    }
  }

  for (let y = 0; y < islandHeight; y++) {
    for (let x = 0; x < islandWidth; x++) {
      if (flowMap[y][x] !== null && flowMap[y][x].every((value) => value)) result.push([y, x]);
    }
  }

  return result;
};

const heights = [
  [10, 10, 1, 11, 2, 15, 17, 6, 17, 10, 0, 10, 18, 9, 16, 13, 8, 9, 12, 6, 3, 2, 5, 19, 4, 14],
  [12, 19, 13, 2, 7, 2, 3, 8, 17, 4, 2, 1, 8, 13, 7, 2, 10, 16, 12, 3, 4, 12, 4, 16, 0, 12],
  [1, 12, 9, 18, 12, 16, 17, 5, 13, 0, 7, 13, 12, 13, 6, 2, 11, 19, 7, 2, 6, 11, 11, 0, 17, 6],
  [1, 12, 2, 0, 11, 7, 7, 3, 7, 13, 11, 1, 11, 15, 5, 13, 14, 12, 4, 10, 5, 16, 3, 17, 18, 12],
  [9, 16, 11, 5, 9, 13, 7, 18, 18, 14, 19, 10, 9, 4, 8, 14, 4, 19, 13, 1, 14, 8, 0, 3, 12, 10],
  [10, 19, 9, 11, 1, 18, 1, 2, 1, 8, 1, 5, 2, 15, 14, 13, 18, 18, 11, 4, 15, 3, 15, 12, 12, 2],
  [0, 10, 9, 2, 15, 9, 12, 7, 0, 0, 12, 18, 9, 12, 18, 4, 18, 10, 3, 1, 17, 14, 13, 18, 9, 4],
  [3, 19, 9, 16, 16, 19, 11, 19, 6, 9, 18, 0, 12, 11, 13, 1, 15, 6, 9, 18, 9, 6, 3, 12, 12, 2],
  [0, 16, 15, 12, 3, 19, 18, 9, 5, 1, 4, 3, 19, 15, 1, 0, 7, 10, 14, 4, 8, 10, 15, 16, 14, 8],
  [15, 9, 3, 15, 19, 17, 17, 10, 9, 8, 16, 11, 3, 15, 15, 9, 1, 14, 11, 13, 16, 7, 1, 7, 13, 5],
  [9, 19, 6, 7, 19, 14, 4, 18, 6, 10, 19, 13, 12, 7, 7, 15, 6, 10, 7, 8, 8, 8, 19, 13, 17, 14],
  [14, 7, 1, 15, 2, 6, 12, 4, 2, 19, 17, 17, 8, 9, 19, 10, 0, 12, 4, 12, 4, 16, 15, 18, 8, 0],
  [4, 8, 5, 8, 0, 2, 19, 18, 1, 7, 13, 9, 13, 16, 6, 15, 15, 12, 18, 5, 8, 11, 6, 17, 5, 11],
  [17, 16, 9, 19, 12, 6, 13, 19, 0, 6, 7, 9, 7, 13, 9, 18, 5, 15, 16, 8, 18, 9, 6, 0, 11, 14],
  [11, 5, 13, 3, 12, 19, 5, 15, 2, 15, 9, 16, 6, 12, 8, 0, 19, 19, 11, 0, 16, 8, 15, 15, 1, 12],
  [15, 16, 16, 19, 14, 1, 2, 11, 14, 8, 16, 13, 2, 0, 3, 8, 1, 5, 4, 15, 12, 5, 13, 3, 5, 3],
];
console.log(pacificAtlantic(heights));

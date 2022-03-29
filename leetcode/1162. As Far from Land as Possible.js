/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const n = grid.length;
  const distanceGrid = Array.from({ length: n }, (v, y) => Array.from({ length: n }, (v, x) => (grid[y][x] === 1 ? 0 : 200)));

  function getMinDist(y, x) {
    let minDistance = 200;
    for (let d = 0; d < 4; d++) {
      const [dy, dx] = dir[d];
      if (y + dy < 0 || x + dx < 0 || y + dy >= n || x + dx >= n) continue;
      minDistance = Math.min(minDistance, distanceGrid[y + dy][x + dx] + 1);
    }
    return minDistance;
  }

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (distanceGrid[y][x] === 0) continue;
      const minDist = getMinDist(y, x);
      distanceGrid[y][x] = minDist;
    }
  }

  let result = -1;
  for (let y = n - 1; y >= 0; y--) {
    for (let x = n - 1; x >= 0; x--) {
      if (distanceGrid[y][x] === 0) continue;
      const minDist = getMinDist(y, x);
      result = Math.max(result, minDist);
      distanceGrid[y][x] = minDist;
    }
  }

  if (result === -1 || result === 0 || result === 200) return -1;
  return result;
};

const grid = [
  [1, 1],
  [1, 0],
];
console.log(maxDistance(grid));

// other
// 나랑 같은 방법으로 풀었는데 훨씬 간결함. 추가 공간도 잡지 않음.
// class Solution {
//   public int maxDistance(int[][] grid) {
//       int n = grid.length, m = grid[0].length, res = 0;
//       for (int i = 0; i < n; i++) {
//           for (int j = 0; j < m; j++) {
//               if (grid[i][j] == 1) continue;
//               grid[i][j] = 201; //201 here cuz as the despription, the size won't exceed 100.
//               if (i > 0) grid[i][j] = Math.min(grid[i][j], grid[i-1][j] + 1);
//               if (j > 0) grid[i][j] = Math.min(grid[i][j], grid[i][j-1] + 1);
//           }
//       }
      
//       for (int i = n-1; i > -1; i--) {
//           for (int j = m-1; j > -1; j--) {
//               if (grid[i][j] == 1) continue;
//               if (i < n-1) grid[i][j] = Math.min(grid[i][j], grid[i+1][j] + 1);
//               if (j < m-1) grid[i][j] = Math.min(grid[i][j], grid[i][j+1] + 1);
//               res = Math.max(res, grid[i][j]); //update the maximum
//           }
//       }
      
//       return res == 201 ? -1 : res - 1;
//   }
// }

// 나중에 bfs로 풀어보기

/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  const n = grid[0].length; 

  // make prefix sum
  for (let i = 0 ; i < 2 ; i++) {
    for (let j = 1 ; j < n ; j++) {
      grid[i][j] += grid[i][j - 1];
    }
  }
  
  let minPointBySecondRobot = Number.MAX_SAFE_INTEGER;
  for (let i = 0 ; i < n ; i++) {
    // when first robot move down at i, second robot can get pointBySecondRobot
    const pointBySecondRobot = Math.max(grid[1][i - 1] || 0, grid[0][n - 1] - grid[0][i]);
    minPointBySecondRobot = Math.min(minPointBySecondRobot, pointBySecondRobot);
  }
  
  return minPointBySecondRobot;
};

const grid = [[2,5,4],[1,5,1]];
console.log(gridGame(grid));
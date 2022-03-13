/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  function freshToRotten(y, x) {
    if (grid[y] === undefined || grid[y][x] === undefined || grid[y][x] !== 1) return false;
    grid[y][x] = 2;
    return true;
  }
  const width = grid[0].length;
  const height = grid.length;
  const rottens = new Set();
  let notRottenCount = 0;
  for (let y = 0 ; y < height ; y++) {
    for (let x = 0 ; x < width ; x++) {
      if (grid[y][x] === 2) rottens.add(`${y} ${x}`);
      else if (grid[y][x] === 1) notRottenCount++;
    }
  }

  let minutes = 0;
  let rottenCount = 0;
  while (true) {
    let isChanged = false;
    for (let coord of [...rottens]) {
      const [y, x] = coord.split(' ').map(value => Number(value));
      let isAtLeastOneRotten = false;
      for (let d = 0 ; d < 4 ; d++) {
        if (freshToRotten(y + dy[d], x + dx[d])) {
          rottens.add(`${y + dy[d]} ${x + dx[d]}`);
          isAtLeastOneRotten = true;
          isChanged = true;
          rottenCount++;
        }
      }
      if (isAtLeastOneRotten) rottens.delete(`${y} ${x}`);
    }
    if (isChanged) minutes++;
    else break;
  }

  return (notRottenCount === rottenCount) ? minutes : -1;
};

const grid = [[2,1,1],[0,1,1],[1,0,1]];
console.log(orangesRotting(grid));
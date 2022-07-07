/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const n = land.length;
  const m = land[0].length;
  const result = [];

  let maxY = 0, minY = Infinity, maxX = 0, minX = Infinity, hectare = 0;
  for (let y = 0 ; y < n;  y++) {
    for (let x = 0 ; x < m ; x++) {
      if (land[y][x] === 0) continue;

      getFarmLand(y, x);
      if ((maxY - minY + 1) * (maxX - minX + 1) === hectare) {
        result.push([minY, minX, maxY, maxX]);
      }

      maxY = 0, minY = Infinity, maxX = 0, minX = Infinity, hectare = 0;
    }
  }

  function getFarmLand(y, x) {
    if (y < 0 || x < 0 || y >= n || x >= m) return;
    if ( land[y][x] === 0) return;

    land[y][x] = 0;
    maxY = Math.max(maxY, y);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    minX = Math.min(minX, x);
    hectare++;

    for (let [dy, dx] of directions) {
      const [ny, nx] = [y + dy, x + dx];
      getFarmLand(ny, nx);
    }
  }

  return result;
};

const land = [[1,0,0],[0,1,1],[0,1,1]];
console.log(findFarmland(land));
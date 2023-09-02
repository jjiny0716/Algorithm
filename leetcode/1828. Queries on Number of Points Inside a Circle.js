/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
  const ans = [];

  const getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  }

  for (const [cx, cy, r] of queries) {
    let inCirclePointCount = 0;
    for (const [x, y] of points) {
      if (getDistance(cx, cy, x, y) <= r) inCirclePointCount++;
    }
    ans.push(inCirclePointCount);
  }

  return ans; 
};

const points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]];
console.log(countPoints(points, queries));
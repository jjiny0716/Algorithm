/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  let minDist = Infinity, minDistIndex = -1;
  for (let i = 0 ; i < points.length ; i++) {
    const [px, py] = points[i];
    if (px !== x && py !== y) continue;
    const dist = Math.abs(px - x) + Math.abs(py - y);
    if (dist < minDist) {
      minDist = dist;
      minDistIndex = i;
    } 
  }

  return minDistIndex;
};

const x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]];
console.log(nearestValidPoint(x, y, points));
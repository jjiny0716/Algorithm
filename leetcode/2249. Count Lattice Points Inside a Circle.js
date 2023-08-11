/**
 * @param {number[][]} circles
 * @return {number}
 */
var countLatticePoints = function(circles) {
  const map = new Map();
  const getDistance = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  let ans = 0;

  for (const [circleX, circleY, r] of circles) {
    for (let y = circleY - r ; y <= circleY + r ; y++) {
      for (let x = circleX - r ; x <= circleX + r ; x++) {
        if (getDistance(circleX, circleY, x, y) <= r) {
          if (!map.has(x)) map.set(x, new Set());
          if (!map.get(x).has(y)) {
            map.get(x).add(y);
            ans++;
          }
        }
      }
    }
  }

  return ans;
};

const circles = [[2,2,2],[3,4,1]];
console.log(countLatticePoints(circles));
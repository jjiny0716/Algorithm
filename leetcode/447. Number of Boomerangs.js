/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  const getDist = (p1, p2) => Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);

  let result = 0;
  for (const p1 of points) {
    const distCount = new Map();
    for (const p2 of points) {
      if (p1 === p2) continue;
      const distance = getDist(p1, p2);
      distCount.set(distance, (distCount.get(distance) || 0) + 1);
    }

    for (const value of distCount.values()) {
      result += value * (value - 1);
    }
  }

  return result;
};

const points = [[0,0],[1,0],[2,0]];
console.log(numberOfBoomerangs(points));
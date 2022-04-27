/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  timePoints = timePoints.map((timePoint) => Number(timePoint.slice(0, 2)) * 60 + Number(timePoint.slice(3, 5))).sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 0 ; i < timePoints.length - 1 ; i++) {
    minDiff = Math.min(minDiff, timePoints[i + 1] - timePoints[i]);
  }

  return Math.min(minDiff, timePoints.at(0) + 1440 - timePoints.at(-1));
};

const timePoints = ["00:00","23:59"];
console.log(findMinDifference(timePoints));

// bucket sort도 가능
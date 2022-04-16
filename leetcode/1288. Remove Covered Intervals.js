/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  let maxRight = 0, result = 0;
  intervals.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
  for (let [s, e] of intervals) {
    if (e > maxRight) {
      maxRight = e;
      result++;
    } 
  }

  return result;
};

const intervals = [[1,2],[1,4],[3,4]];
console.log(removeCoveredIntervals(intervals));
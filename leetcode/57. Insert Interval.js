/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let s, e, f = 0;
  for (let i = 0 ; i < intervals.length ; i++) {
    if (isOverlap(intervals[i], newInterval)) {
      if (s === undefined) s = i;
      e = i; 
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    }
    if (!f && intervals[i][1] < newInterval[0]) f = i + 1;
  }

  function isOverlap([a1, a2], [b1, b2]) {
    return a1 <= b2 && b1 <= a2
  }
  if (s !== undefined && e !== undefined) intervals.splice(s, e - s + 1, newInterval);
  intervals.splice(f, 0, newInterval);

  return intervals;
};

const intervals = [[1, 5]], newInterval = [6, 8];
console.log(insert(intervals, newInterval));
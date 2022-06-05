/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let currentInterval = intervals[0];
  for (let interval of intervals) {
    if (interval[0] <= currentInterval[1]) currentInterval[1] = Math.max(currentInterval[1], interval[1]);
    else {
      result.push([...currentInterval]);
      currentInterval = interval;
    }
  }
  result.push(currentInterval);

  return result;
};

const intervals = [
  [1, 4],
  [2, 3],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals));

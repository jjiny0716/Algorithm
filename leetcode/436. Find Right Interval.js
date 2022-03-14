/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  function binarySearch(intervals, target) { // intervals
    let left = 0;
    let right = intervals.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (intervals[mid][0] < target) left = mid + 1;
      else if (intervals[mid][0] > target) right = mid - 1;
      else return mid;
    }
    return left;
  }
  intervals = intervals.map((interval, index) => [...interval, index]).sort((a, b) => a[0] - b[0]);
  const result = Array.from({length: intervals.length}, () => -1);
  for (let interval of intervals) {
    const idx = binarySearch(intervals, interval[1]);
    if (intervals[idx] !== undefined && interval[1] <= intervals[idx][0]) result[interval[2]] = intervals[idx][2];
  }

  return result;
};

const intervals = [[1,2],[2,3], [3,4]];
console.log(findRightInterval(intervals));
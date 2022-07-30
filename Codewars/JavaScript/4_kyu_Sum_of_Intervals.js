function sumIntervals(intervals) {
  let result = 0;
  intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  let latest = intervals[0][0];

  for (const [s, e] of intervals) {
    if (s > latest) latest = s;
    result += Math.max(e - latest, 0);
    latest = Math.max(latest, e);
  }

  return result;
}

console.log(
  sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11],
  ])
);

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
  events.sort((a, b) => a[1] === b[1]? a[0] - b[0] : a[1] - b[1]);
  let result = 0;
  let d = 0;

  for (const [s, e] of events) {
    if (d < s) {
      d = s;
      result++;
    }
    else if (s <= d && d < e) {
      d++;
      result++;
    }
  }

  return result;
};

const events= [[1,2],[1,2],[3,3],[1,5],[1,5]];
console.log(maxEvents(events));
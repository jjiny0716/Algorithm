/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function (clips, time) {
  const map = {};
  for (let [start, end] of clips) map[start] = Math.max(map[start] || 0, end);

  let result = 0;
  let startTimeIdx = 0, curTime = 0;
  const startTimes = Object.keys(map);
  while (curTime < time) {
    result++;
    let maxEndTime = 0;
    let idx;
    for (idx = startTimeIdx ; startTimes[idx] <= curTime ; idx++) {
      const startTime = startTimes[idx];
      maxEndTime = Math.max(maxEndTime, map[startTime]);
    }
    if (idx === startTimeIdx) return -1;
    startTimeIdx = idx;
    curTime = maxEndTime;
  }
  
  return result;
};

const clips = [[0,1]], time = 9;
console.log(videoStitching(clips, time));
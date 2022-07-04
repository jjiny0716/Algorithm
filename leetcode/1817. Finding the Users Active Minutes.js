/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
  const logMap = {};
  for (let [id, time] of logs) {
    if (!logMap[id]) logMap[id] = new Set();
    logMap[id].add(time);
  }

  const result = new Array(k).fill(0);
  for (let timeSet of Object.values(logMap)) {
    result[timeSet.size()]++;
  }

  return result;
};
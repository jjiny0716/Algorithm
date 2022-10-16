/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  let last = 0,
    maxLength = 0,
    result;
  for (const [id, leaveTime] of logs) {
    if (leaveTime - last > maxLength) {
      result = id;
      maxLength = leaveTime - last;
    } else if (leaveTime - last === maxLength) result = id;
    last = leaveTime;
  }

  return result;
};

const n = 26,
  logs = [
    [1, 1],
    [3, 7],
    [2, 12],
    [7, 17],
  ];
console.log(hardestWorker(n, logs));

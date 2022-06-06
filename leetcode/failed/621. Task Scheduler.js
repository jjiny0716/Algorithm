/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const schedule = [];
  const map = {};

  for (let task of tasks) {
    map[task] = (map[task] || 0) + 1;
  }

  let start = 0;
  for (let [task, count] of Object.entries(map).sort((a, b) => b[1] - a[1])) {
    for (let i = start; count !== 0; i += n + 1) {
      schedule[i] = task;
      count--;
    }
    while (schedule[start]) start++;
  }
  console.log(schedule);
  return schedule.length;
};

const tasks = ["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"],
  n = 2;
console.log(leastInterval(tasks, n));

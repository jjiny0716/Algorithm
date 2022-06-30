function solution(priorities, location) {
  const priorityCount = {};
  let max = 0;
  for (let priority of priorities) {
    priorityCount[priority] = (priorityCount[priority] || 0) + 1;
    max = Math.max(max, priority);
  }

  priorities = priorities.map((value, i) => [value, i]);
  let count = 0;
  while (true) {
    if (priorities[0][0] !== max) {
      priorities.push(...priorities.splice(0, 1));
    } else {
      count++;
      if (priorities[0][1] === location) return count;
      const value = priorities.splice(0, 1)[0][0];
      priorityCount[value] -= 1;
      if (priorityCount[value] === 0) {
        max = 0;
        for (let i = 0; i < priorities.length; i++) {
          max = Math.max(max, priorities[i][0]);
        }
      }
    }
  }

  return -1;
}

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const visited = {};
  deadends = deadends.reduce((map, deadend) => {
    map[deadend] = true;
    return map;
  }, {});

  const queue = ["0000"];
  let result = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const lock = queue.shift();
      
      if (visited[lock]) continue;
      if (lock === target) return result;
      visited[lock] = true;
      if (deadends[lock]) continue;

      // generate next nodes
      for (let i = 0; i < 4; i++) {
        const lockArr = lock.split('');
        lockArr[i] = (Number(lockArr[i]) + 1) % 10;
        if (!visited[lockArr.join('')]) queue.push(lockArr.join(''));

        lockArr[i] = (Number(lockArr[i]) - 2 + 10) % 10;
        console.log(lockArr.join(''));
        if (!visited[lockArr.join('')]) queue.push(lockArr.join(''));
      }
    }
    result++;
  }

  return -1;
};

const deadends = ["0201", "0101", "0102", "1212", "2002"], target = "0202";
console.log(openLock(deadends, target));
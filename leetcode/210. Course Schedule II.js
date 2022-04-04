/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (n, prerequisites) {
  const adj = Array.from({length: n}, () => []);
  const connected = Array.from({length: n}, () => 0);
  const visited = new Array(n - 1);
  for (let pre of prerequisites) {
    adj[pre[1]].push(pre[0]);
    connected[pre[0]]++;
  }

  const queue = Array.from({length: n}, (v, i) => i);
  const result = [];
  while (queue.length) {
    const course = queue.shift();
    if (visited[course] || connected[course]) continue;
    visited[course] = true;
    for (let next of adj[course]) {
      if (--connected[next] === 0) queue.push(next);
    }
    result.push(course);
  }

  return result.length === n ? result : [];
};

const numCourses = 2, prerequisites = [[0, 1]];
console.log(findOrder(numCourses, prerequisites));

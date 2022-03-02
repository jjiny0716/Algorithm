/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const doneCourses = Array.from({length: numCourses}, () => false);
  const prerequisitesOfCourses = Array.from({length: numCourses}, () => []); 

  for (let prerequisite of prerequisites) {
    const course = prerequisite[0];
    const pre = prerequisite[1];
    prerequisitesOfCourses[course].push(pre);
  }
  
  let totalCount = 0;
  while (totalCount !== numCourses) {
    let count = 0;
    for (let i = 0; i < numCourses ; i++) {
      if (doneCourses[i]) continue;
      if (prerequisitesOfCourses[i].length === 0 || prerequisitesOfCourses[i].every(val => doneCourses[val])) {
        doneCourses[i] = true;
        count++;
      }
    }

    if (count === 0) return false;
    totalCount += count;
  }

  return true;
};

const n = 2, p = [[1,0], [0, 1]];
console.log(canFinish(n, p));

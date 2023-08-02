/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
  const n = questions.length;
  const maxPoints = new Array(n + 1).fill(0);
  for (let i = 0 ; i < n ; i++) {
    const [points, brainPower] = questions[i];
    maxPoints[i] = Math.max(maxPoints[i - 1] || 0, maxPoints[i]);
    maxPoints[Math.min(i + brainPower + 1, n)] = Math.max(maxPoints[Math.min(i + brainPower + 1, n)], maxPoints[i] + points);
  }

  return maxPoints.at(-1);
};

const questions = [[21,5],[92,3],[74,2],[39,4],[58,2],[5,5],[49,4],[65,3]];
console.log(mostPoints(questions));
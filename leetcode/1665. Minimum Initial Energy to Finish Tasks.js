/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function(tasks) {
  return tasks.sort((a, b) => (b[0] - b[1]) - (a[0] - a[1])).reduce((requiredEnergy, [actual, minimum]) => requiredEnergy = requiredEnergy + actual < minimum ? minimum : requiredEnergy + actual , 0);
};

const tasks = [[1,3],[2,4],[10,11],[10,12],[8,9]];
console.log(minimumEffort(tasks));

// actual, minimum
// best: low, high

// worst: high, low

// [1, 2], [48, 50] -> 52
// [48, 50], [1, 2] -> 51
// 정렬과 관계없이 쓰는 에너지 같음 = 모든 일을 수행하고 남는 에너지를 줄여야함
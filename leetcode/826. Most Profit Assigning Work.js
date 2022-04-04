/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  const job = difficulty.map((value, i) => [value, profit[i]]).sort((a, b) => b[1] - a[1]);
  worker = worker.sort((a, b) => b - a);

  let result = 0;
  let jobIndex = 0, workerIndex = 0;
  while (workerIndex < worker.length && jobIndex < job.length) {
    if (worker[workerIndex] >= job[jobIndex][0]) {
      result += job[jobIndex][1];
      workerIndex++;
    }
    else jobIndex++;
  }

  return result;
};

const difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25];
console.log(maxProfitAssignment(difficulty, profit, worker));
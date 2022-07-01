function solution(N, stages) {
  const failRateArr = new Array(N + 1).fill(0);
  let totalStageCount = 0,
    stageFailCount = 0;
  stages.sort((a, b) => b - a);
  for (let i = 0; i < stages.length; i++) {
    totalStageCount++;
    stageFailCount++;
    if (stages[i] !== stages[i + 1]) {
      if (stages[i] < failRateArr.length) {
        failRateArr[stages[i]] = stageFailCount / totalStageCount;
      }
      stageFailCount = 0;
    }
  }

  const result = [];
  for (let i = 1; i <= N; i++) {
    result.push(i);
  }
  result.sort((a, b) => failRateArr[b] - failRateArr[a]);

  return result;
}

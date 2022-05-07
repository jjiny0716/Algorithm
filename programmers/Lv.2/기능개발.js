function solution(progresses, speeds) {
  let finishedCount = 0;
  let finished = [],
    day = 1;
  while (finishedCount !== progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] === "done") continue;

      progresses[i] += speeds[i];
      if (progresses[i] >= 100) {
        progresses[i] = "done";
        finished[i] = day;
        finishedCount++;
      }
    }

    day++;
  }

  const result = [];
  let combo = 0;
  let comboStartedIndex = 0;
  for (let i = 0; i < finished.length; i++) {
    if (finished[comboStartedIndex] < finished[i]) {
      comboStartedIndex = i;
      result.push(combo);
      combo = 1;
    } else {
      combo++;
    }
  }

  if (combo) result.push(combo);
  return result;
}

// 개선
function solution(progresses, speeds) {
  let finished = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));

  const result = [];
  let combo = 0;
  let comboStartedIndex = 0;
  for (let i = 0; i < finished.length; i++) {
    if (finished[comboStartedIndex] < finished[i]) {
      result.push(combo);
      comboStartedIndex = i;
      combo = 0;
    }
    combo++;
  }

  if (combo) result.push(combo);
  return result;
}

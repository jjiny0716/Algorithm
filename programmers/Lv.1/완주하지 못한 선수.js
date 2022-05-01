function solution(participant, completion) {
  const completionMap = {};
  for (let c of completion) {
    completionMap[c] = (completionMap[c] || 0) + 1;
  }

  for (let p of participant) {
    if (!completionMap[p]) return p;
    completionMap[p]--;
  }

  return -1;
}

console.log(solution([1, 1, 2], [1]));

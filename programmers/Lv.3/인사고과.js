function solution(scores) {
  const wanho = scores[0];
  scores.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : b[0] - a[0]);

  let curA = scores[0][0];
  let curMaxB = scores[0][1], lastMaxB = -1;
  const newScores = [];
  for (const score of scores) {
    const [a, b] = score;
    if (a != curA) {
      curA = a;
      lastMaxB = Math.max(lastMaxB, curMaxB);
      curMaxB = b;
    }

    if (b >= lastMaxB) {
      newScores.push(score);
    }
    
    curMaxB = Math.max(curMaxB, b);
  }

  const wanhoRank = newScores.sort((a, b) => (b[0] + b[1]) - (a[0] + a[1])).indexOf(wanho) + 1;
  return wanhoRank === 0 ? -1 : wanhoRank;
}

const scores = [[20, 19], [5, 99], [12416262, 0], [2, 512512], [122, 20]];
console.log(solution(scores));

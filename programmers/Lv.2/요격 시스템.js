function solution(targets) {
  targets.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  let ans = 0;
  for (let i = 0; i < targets.length; i++) {
    let rightEdge = targets[i][1];
    while (i < targets.length - 1 && targets[i + 1][0] < rightEdge) {
      rightEdge = Math.min(rightEdge, targets[i + 1][1]);
      i++;
    }

    ans++;
  }

  return ans;
}

const targets = [
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
];
console.log(solution(targets));

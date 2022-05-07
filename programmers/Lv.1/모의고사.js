function solution(answers) {
  var answer = [];

  return [[1, c1], [2, c2], [3, c3]].filter(([_, c]) => c !== 0).sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]).map((entry) => entry[0]);
}


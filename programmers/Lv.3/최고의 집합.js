function solution(n, s) {
  if (n > s) return [-1];
  const set = new Array(n).fill(Math.floor(s / n));
  s -= set[0] * n;
  for (let i = 0 ; i < n && s > 0 ; i++) {
    set[i]++;
    s--;
  }

  return set.sort((a, b) => a - b);
}

const n = 2, s = 9;
console.log(solution(n, s));
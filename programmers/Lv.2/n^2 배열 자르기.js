function solution(n, left, right) {
  const ans = new Array(right - left + 1);
  for (let i = left ; i <= right ; i++) {
    const [y, x] = [Math.floor(i / n), i % n];
    ans[i - left] =  x + 1 + Math.max(y - x, 0);
  }

  return ans;
}

solution(4, 7, 14);

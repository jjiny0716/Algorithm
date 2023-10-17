function solution(data, col, row_begin, row_end) {
  col--;
  row_begin--;
  row_end--;
  data.sort((a, b) => a[col] === b[col] ? b[0] - a[0] : a[col] - b[col]);

  let ans = 0;
  for (let i = row_begin ; i <= row_end ; i++) {
    const mod = data[i].reduce((prev, cur) => prev + (cur % (i + 1)), 0);
    ans ^= mod;
  }

  return ans;
}

const data = [[2,2,6],[1,5,10],[4,2,9],[3,8,3]], col = 2, row_begin = 2, row_end = 3;
console.log(solution(data, col, row_begin, row_end));

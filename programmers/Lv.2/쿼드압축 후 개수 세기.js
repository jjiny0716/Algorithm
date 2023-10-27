function solution(arr) {
  const n = arr.length;
  const ans = [0, 0];
  const comp = (row, col, size) => {
    const first = arr[row][col];
    for (let y = row ; y < row + size ; y++) {
      for (let x = col ; x < col + size ; x++) {
        if (arr[y][x] !== first) {
          comp(row, col, size / 2);
          comp(row + size / 2, col, size / 2);
          comp(row, col + size / 2, size / 2);
          comp(row + size / 2, col + size / 2, size / 2);
          return;
        }
      }
    }

    ans[first]++;
  }
  comp(0, 0, n);

  return ans;
}

const arr = [
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];
console.log(solution(arr));

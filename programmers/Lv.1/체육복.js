function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  for (let i = 0; i < lost.length; i++) {
    const j = reserve.findIndex((val) => val === lost[i]);
    if (j !== -1) {
      lost.splice(i, 1);
      reserve.splice(j, 1);
      i--;
    }
  }

  let borrowCount = 0,
    i = 0,
    j = 0;

  while (i < lost.length && j < reserve.length) {
    if (lost[i] - reserve[j] < -1) {
      i++;
    } else if (lost[i] - reserve[j] > 1) {
      j++;
    } else {
      borrowCount++;
      i++;
      j++;
    }
  }

  return n - lost.length + borrowCount;
}

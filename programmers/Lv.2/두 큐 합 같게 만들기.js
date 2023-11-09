function solution(queue1, queue2) {
  const circleList = [...queue1, ...queue2];
  const n = circleList.length;
  const total = circleList.reduce((prev, cur) => prev + cur, 0);
  let s = 0;
  let windowSum = 0;
  let ans = Infinity;
  for (let e = 0; e < n; e++) {
    windowSum += circleList[e];

    while (windowSum > total / 2) {
      windowSum -= circleList[s];
      s++;
    }

    if (windowSum === total / 2) {
      if (e >= queue1.length - 1) ans = Math.min(ans, (s - 0) + (e - queue1.length + 1));
      else ans = Math.min(ans, (n - queue1.length + s) + (e + 1));
    }
  }

  return ans !== Infinity ? ans : -1;
}

const queue1 = [3, 2, 7, 2],
  queue2 = [4, 6, 5, 1];
console.log(solution(queue1, queue2));


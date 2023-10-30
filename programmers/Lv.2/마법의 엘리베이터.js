function solution(storey) {
  let ans = 0;
  while (storey) {
    const n = storey % 10;
    storey = Math.floor(storey / 10);
    if (n > 5 || ((n === 5) && (storey % 10 >= 5))) {
      storey += 1;
      ans += 10 - n;
    }
    else ans += n;
  }

  return ans;
}

const storey = 55;
console.log(solution(storey));

// 9910
// 9900
// 10000
// 0
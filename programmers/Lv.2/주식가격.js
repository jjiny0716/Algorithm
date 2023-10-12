function solution(prices) {
  const n = prices.length;
  const stack = [];
  const ans = new Array(n);
  
  for (i = 0; i < n; i++) {
    while (stack.length && prices[stack.at(-1)] > prices[i]) {
      ans[stack.at(-1)] = i - stack.at(-1);
      stack.pop();
    }

    stack.push(i);
  }

  for (const i of stack) {
    ans[i] = n - i - 1;
  }

  return ans;
}

const prices = [1, 2, 3, 2, 3];
console.log(solution(prices));
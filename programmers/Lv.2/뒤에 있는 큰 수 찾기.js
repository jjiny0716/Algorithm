function solution(numbers) {
  const stack = [];
  const ans = new Array(numbers.length).fill(-1);

  for (let i = 0 ; i < numbers.length ; i++) {
    while (stack.length && stack.at(-1)[0] < numbers[i]) {
      ans[stack.at(-1)[1]] = numbers[i];
      stack.pop();
    }

    stack.push([numbers[i], i]);
  }

  return ans;
}

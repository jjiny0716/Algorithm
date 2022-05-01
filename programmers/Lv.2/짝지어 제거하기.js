function solution(s) {
  const stack = [];
  for (let i = 0 ; i < s.length ; i++) {
    if (s[stack.at(-1)] === s[i]) stack.pop();
    else if (s[i] === s[i + 1]) i++;
    else stack.push(i);
  }

  return stack.length ? 0 : 1;
}

const s = "baba";
console.log(solution(s));
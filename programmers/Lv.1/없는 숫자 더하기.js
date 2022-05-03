function solution(s) {
  if (s.length % 2 === 1) return 0;
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  }

  function isValidBracketString(s) {
    const stack = [];
    for (let bracket of s) {
      if (!pairs[bracket]) stack.push(bracket);
      else if (!(stack.pop() === pairs[bracket])) return false;
    }

    return true;
  }
  
  let result = 0;
  for (let i = 0 ; i < s.length ; i++) {
    result += isValidBracketString(s.slice(i, s.length) + s.slice(0, i)) ? 1 : 0;
  }

  return result;
}

const s = "[";
console.log(solution(s));

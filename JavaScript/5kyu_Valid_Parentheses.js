function validParentheses(parens) {
  const open = "({[";
  const close = ")}]";
  const stack = [];

  for (let c of parens) {
    if (open.includes(c)) stack.push(c);
    else {
      if (stack.pop() !== open[close.indexOf(c)]) return false;
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(validParentheses("(()()()())(())"))
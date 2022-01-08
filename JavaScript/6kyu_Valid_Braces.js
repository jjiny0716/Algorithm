  function validBraces(braces){
  const stack = [];
  const open = "({[";
  const close = ")}]"
console.log(braces);
  for (c of braces) {
    if (open.includes(c)) stack.push(c);
    else {
      //console.log(stack.pop() + "  " + close.indexOf(c));
      if (stack.pop() !== open[close.indexOf(c)]) return false;
    }  
  }

  if (stack.length !== 0) return false
  return true;
}

console.log(validBraces(")"));
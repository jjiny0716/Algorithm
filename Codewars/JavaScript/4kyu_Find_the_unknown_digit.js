function solveExpression(exp) {
  for (let i = 0; i <= 9; i++) {
    if (exp.includes(i)) continue;
    const testExp = exp.replace(/[?]/g, i).replace(/([-])\1{1,}/, "+");
    
    let left, right, first, second, operator;
    [left, right] = testExp.split("=");
    
    for (let i = 1 ; i < left.length ; i++) {
      if (left[i] === '+' || left[i] === '-' || left[i] === '*') {
        operator = left[i];
        first = left.substring(0, i);
        second = left.substring(i + 1, left.length);
        break;
      }
    }
    if (Number(first).toString() !== first || Number(second).toString() !== second || Number(right).toString() !== right) continue;
    
    if (eval(left) == right) return i;
  }

  return -1;
}

const exp = "123--45?=5?088";
console.log(solveExpression(exp));


//leading 0
function differentiate(f) {
  let [a, n] = f.split('x');
  if (a === "-" || a === "") a += 1;
  
  if (!n) {
    return n === undefined ? 0 : Number(a);
  }
  
  n = n.replace("^", "");
  // 코드가 너무 복잡한 것 같은데..
  a = a * n;
  n -= 1;

  if (a === 1) a = "";
  if (a === -1) a = "-";
  if (n === 1) n = "";
  else n = `^${n}`

  return `${a}x${n}`;
}

console.log(differentiate("x^-1"));

// other
function differentiate2(f) {
  let [_, a, x, b] = f.match(/(-?\d+)?(-?x)?\^?(-?\d+)?/)
  !a && (a = 1), !b && (b = 1), !x && (a = 0), x == '-x' && (a = -1), a *= b--
  return (a + 'x^' + b).replace('x^0', '').replace('x^1', 'x').replace(/\b1x/, 'x')
}
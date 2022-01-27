function going(n) {
  const divs = [1];
  for (let i = n ; i > 1 ; i--) {
    divs.push(i * divs[divs.length - 1]);
  }
  let result = 0;
  for (let div of divs) result += 1 / div;
  result = Math.trunc(result * 100) / 100;
  return result;
}


console.log(going(4));
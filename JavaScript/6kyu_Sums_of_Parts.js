function partsSums(ls) {
  let sum = ls.reduce((sum, value) => sum += value, 0);

  const result = [];
  ls.reduce((s, value) => {
    result.push(s);
    return s -= value;
  }, sum)
  result.push(0);

  return result;
}

console.log(partsSums([0, 1, 3, 6, 10]));

// others
function partsSums2(ls) {
  ls.unshift(0);
  let sum = ls.reduce((p, c) => p + c, 0);
  return ls.map(v => sum = sum - v);
}
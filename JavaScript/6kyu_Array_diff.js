function arrayDiff(a, b) {
  const count = {};
  for (let n of b) count[n] = true;
  return a.filter((n) => !count[n]);
}

console.log(arrayDiff([1, 2, 3, 4, 5, 6, 2], [1, 2, 5]));

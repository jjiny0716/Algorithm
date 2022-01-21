function findUniq(arr) {
  const m = new Map();
  for (let i of arr) {
    m.get(i) ? m.set(i, m.get(i) + 1) : m.set(i, 1);
  }

  return Array.from(m).filter(value => value[1] == 1)[0][0]
}

console.log(findUniq([3, 10, 3, 3, 3]));

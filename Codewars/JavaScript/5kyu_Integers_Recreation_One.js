function listSquared(m, n) {
  const result = [];
  for (let i = m ; i <= n ; i++) {
    const sum = getDivisors(i).reduce((prev, cur) => prev + (cur ** 2), 0);
    if (Number.isInteger(Math.sqrt(sum))) {
      result.push([i, sum]);
    }
  }

  function getDivisors(n) {
    const divisors = new Set();
    for (let i = 1 ; i <= Math.sqrt(n) ; i++) {
      if (n % i === 0) {
        divisors.add(i);
        divisors.add(n / i);
      }
    }

    return [...divisors];
  }

  return result
}

console.log(listSquared(1, 250));
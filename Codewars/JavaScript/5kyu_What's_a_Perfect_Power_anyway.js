var isPP = function(n) {
  const m = new Map();

  for (let div = 2 ; div <= n ; div++) {
    while (n % div === 0) {
      if (!m.get(div)) m.set(div, 0);
      m.set(div, m.get(div) + 1);
      n /= div;
    }
  }
  console.log(m);

  const counts = Array.from(m);

  let gcd = 1;
  for (let i = 2 ; i <= counts[0][1] ; i++) {
    let isCd = true;
    for (let j = 0 ; j < counts.length ; j++) {
      if (counts[j][1] % i !== 0) {
        isCd = false;
        break;
      }
    }
    if (isCd) gcd = i;
  }
  console.log(counts, gcd);
  console.log(counts.reduce((multi, value) => {
    console.log(multi, value[0], value[1] / gcd);
    return multi * Math.pow(value[0], (value[1] / gcd));
  }, 1));
  return counts.every(count => count[1] > 1 && count[1] % gcd === 0) ? [counts.reduce((multi, value) => multi * Math.pow(value[0], (value[1] / gcd)), 1), gcd] : null;
}

console.log(isPP(324));
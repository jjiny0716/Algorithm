function thirt(n) {
  const remainders = [1, 10, 9, 12, 3, 4, 1];
  last = n.toString();
  while (true) {
    let next = 0;
    for (let i = 0 ; i < last.length ; i++) {
      next += remainders[i % 6] * last[last.length - 1 - i];
      console.log(remainders[i % 6] * last[last.length - 1 - i]);
    }
    if (last === next.toString()) break;
    last = next.toString();
  }

  return last;
}

console.log(thirt(1234567));
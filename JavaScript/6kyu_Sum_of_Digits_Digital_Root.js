function digital_root(n) {
  if (Math.floor(n / 10) === 0) return n;
  let result = 0;
  while (n !== 0) {
    result += n % 10;
    n = Math.floor(n / 10);
  }

  return digital_root(result);
}

console.log(digital_root(456));
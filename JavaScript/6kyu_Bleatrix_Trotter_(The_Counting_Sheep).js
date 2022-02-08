function trotter(n) {
  if (n === 0) return "INSOMNIA";
  const numbers = Array.from({length: 10}, () => false);

  let i = n;
  while (numbers.some(value => !value)) {
    i.toString().split('').forEach(number => numbers[number] = true);
    i += n;
  }

  return i - n;
}

console.log(trotter(0));
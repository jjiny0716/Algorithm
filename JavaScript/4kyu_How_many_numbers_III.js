function find(n, k, numbers, results) {
  if (numbers.length === k) {
    if (n === numbers.reduce((sum, number) => sum += number, 0)) results.push(numbers.join(''));
    return;
  }
  else {
    const remain = k - numbers.length;
    const sum = numbers.reduce((sum, number) => sum += number, 0);
    if (sum + remain * 9 < n || sum + remain * 1 > n) return;
  }

  for (let i = numbers.length === 0 ? 1 : numbers[numbers.length - 1] ; i <= 9 ; i++) {
    numbers.push(i);
    find(n, k, numbers, results)
    numbers.pop(i);
  }
}

function findAll(n, k) {
  const results = [];
  const numbers = [];
  find(n, k, numbers, results);

  return results.length !== 0 ? [results.length, results[0], results.pop()] : [];
}

console.log(findAll(35, 6));
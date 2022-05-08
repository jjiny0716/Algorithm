function solution(numbers) {
  const n = numbers.length;
  const set = new Set();
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }

  return [...set].sort((a, b) => a - b);
}

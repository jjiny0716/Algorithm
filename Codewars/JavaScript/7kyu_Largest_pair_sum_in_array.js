function largestPairSum (numbers) {
  return numbers.sort((a, b) => b - a).slice(0, 2).reduce((sum, value) => sum += value, 0);
}

console.log(largestPairSum([23, 2, 19, 14, 10]));
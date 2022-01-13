function weakNumbers(n) {
  const numOfDivisor = [];
  for (let i = 1 ; i <= n ; i++) {
    let count = 0;
    for (let j = 1 ; j <= i ; j++) {
      if (i % j == 0) count++; 
    }
    numOfDivisor.push(count);
  }
  console.log(numOfDivisor);

  const weaknesses = [];
  for (let i = 0 ; i < n ; i++) {
    let weakness = 0;
    for (let j = 0 ; j < i ; j++) {
      if (numOfDivisor[i] < numOfDivisor[j]) weakness++;
    }
    weaknesses.push(weakness);
  }
  console.log(weaknesses);

  const weakest = Math.max(...weaknesses); // weakness
  return [weakest, weaknesses.reduce(((prev, cur) => prev += cur == weakest ? 1 : 0), 0)];
}

console.log(weakNumbers(9));
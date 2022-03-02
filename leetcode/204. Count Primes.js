/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let result = 0;
  for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) result++;
  }

  return result;
};

const n = 10;

// others

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes2 = function (n) {
  let isPrime = new Array(n).fill(true);
  isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;
    for (let j = i * i; j < n; j += i) isPrime[j] = false;
  }

  let count = 0;
  for (let i = 1; i < n; i++) {
    if (isPrime[i]) count++;
  }
  return count;
};

console.log(countPrimes2(n));

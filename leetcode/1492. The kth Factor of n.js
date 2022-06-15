/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// O(n)
var kthFactor = function(n, k) {
  let count = 0;
  for (let i = 1 ; i <= n ; i++) {
    if (n % i === 0) count++;
    if (count === k) return i;
  }

  return -1;
};

// O(sqrt n)
var kthFactor2 = function(n, k) {
  let factors = [], i;
  for (i = 1 ; i <= Math.sqrt(n) ; i++) {
    if (n % i === 0) factors.push(i);
    if (factors.length === k) return factors.at(-1);
  }
  const [start, end] = factors.at(-1) ** 2 === n ? [factors.length - 2, 1] : [factors.length - 1, 0];

  for (i = start ; i >= end ; i--) {
    factors.push(n / factors[i]);
    console.log(factors);
    if (factors.length === k) return factors.at(-1);
  }

  return -1;
};

const n = 100, k = 7;
console.log(kthFactor2(n, k));
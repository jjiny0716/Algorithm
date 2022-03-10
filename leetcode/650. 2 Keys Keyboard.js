/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  const primeFactors = [];
  let i = 2;
  while (n !== 1) {
    if (n % i === 0) {
      primeFactors.push(i);
      n /= i;
    }
    else i++;
  }

  return primeFactors.reduce((sum, value) => sum += value, 0);
};

const n = 1;
console.log(minSteps(n));
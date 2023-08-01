/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function(n, target) {
  let digitSum = 0;
  let x = n;
  while (x) {
    digitSum += x % 10;
    x = Math.floor(x / 10);
  }

  if (digitSum <= target) return 0;

  const originalN = n;
  let count = 0;
  while (digitSum >= target && n) {
    digitSum -= n % 10;
    n = Math.floor(n / 10);
    count++;
  } 

  if (digitSum < target) {
    
    return (n + 1) * (10 ** count) - originalN;
  }

  return 0;
};

const n = 123, target = 6;
console.log(makeIntegerBeautiful(n, target));

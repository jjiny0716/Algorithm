/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = {}

  while (n !== 1) {
    let next = 0;
    while (n !== 0) {
      next += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    n = next;
    if (map[n]) return false;
    map[n] = true;
  }

  return true;
};

console.log(isHappy(19));

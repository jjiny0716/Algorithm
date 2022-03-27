/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let i;
  for (i = 1 ; n >= i ; i++) {
    n -= i;
  }

  return i - 1;
};

console.log(arrangeCoins(3));

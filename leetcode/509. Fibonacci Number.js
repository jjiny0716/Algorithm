/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const cache = new Array(30);
  cache[0] = 0;
  cache[1] = 1;
  function getFib(n) {
    if (n < 0) return 0;
    if (cache[n]) return cache[n];
    return (cache[n] = getFib(n - 2) + getFib(n - 1));
  }

  return getFib(n);
};

console.log(fib(4));

// 2022-08-15
{
  const table = new Array(30).fill(undefined);
  table[0] = 0;
  table[1] = 1;
  var fib = function (n) {
    if (table[n] !== undefined) return table[n];
    return table[n] = (fib(n - 1) + fib(n - 2));
  };
}

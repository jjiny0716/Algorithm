const cache = [0, 1, 1];
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (cache[n] !== undefined) return cache[n];
  return cache[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

console.log(tribonacci(25));

// 2022-08-15
{
  const table = new Array(37).fill(undefined);
  table[0] = 0;
  table[1] = 1;
  table[2] = 1;
  var tribonacci = function(n) {
    if (table[n] !== undefined) return table[n];
    return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
  };
}
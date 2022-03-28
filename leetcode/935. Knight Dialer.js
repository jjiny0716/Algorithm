/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
  const pad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [undefined, 0, undefined],
  ];
  const directions = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
  ];
  const mod = 10**9 + 7;
  const cache = Array.from({length: 10}, () => Array.from({length: n - 1}));

  function dfs(y, x, count, max) {
    if (pad[y] === undefined || pad[y][x] === undefined) return 0;
    if (count === max) return 1;
    if (cache[pad[y][x]][count]) return cache[pad[y][x]][count];

    let sum = 0;
    for (let direction of directions) {
      const [dy, dx] = direction;
      sum += dfs(dy + y, dx + x, count + 1, max) % mod;
    }
    cache[pad[y][x]][count] = sum % mod;
    return sum % mod;
  }

  let result = 0;
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 3; x++) {
      result += dfs(y, x, 0, n - 1);
    }
  }
  
  return result % mod;
};

console.log(knightDialer(3131));

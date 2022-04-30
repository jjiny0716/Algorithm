/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const result = [];
  function dfs(num) {
    if (num > n) return;
    result.push(num);
    for (let i = 0 ; i <= 9 ; i++) {
      dfs(num * 10 + i);
    }
  }

  for (let i = 1 ; i <= 9 ; i++) {
    dfs(i);
  }

  return result;
};

console.log(lexicalOrder(13));
/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
  const bannedSet = new Set(banned);
  let result = 0, sum = 0;
  for (let i = 1 ; i <= n ; i++) {
    if (bannedSet.has(i)) continue;
    if (sum + i > maxSum) break;
    result++;
    sum += i;
  }

  return result;
};

const banned = [11], n = 7, maxSum = 50;
console.log(maxCount(banned, n, maxSum));
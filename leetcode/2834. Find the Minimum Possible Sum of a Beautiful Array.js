/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minimumPossibleSum = function(n, target) {
  const set = new Set();
  let ans = 0;
  for (let i = 1 ; set.size < n ; i++) {
    if (set.has(i)) continue;
    ans += i;
    set.add(target - i);
  }

  return ans;
};

const n = 2, target = 3;
console.log(minimumPossibleSum(n, target));
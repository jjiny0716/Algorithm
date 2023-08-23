/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function(n, k) {
  let ans = 0;
  const set = new Set();
  for (let i = 1 ; n !== 0 ; i++) {
    if (!set.has(i)) {
      set.add(k - i);
      ans += i;
      n--;
    }
  }

  return ans;
};

const n = 5, k = 4;
console.log(minimumSum(n, k));

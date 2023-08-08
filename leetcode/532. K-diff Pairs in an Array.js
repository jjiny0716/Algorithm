/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k === 0) {
      return [...nums.reduce((prev, cur) => {
        prev.set(cur, (prev.get(cur) || 0) + 1);
        return prev;
      }, new Map()).values()].filter((value) => value > 1).length;
  }

  nums = [... new Set(nums)];
  const map = new Map();
  let ans = 0;

  for (const n of nums) {
    ans += map.get(n - k) || 0;
    ans += map.get(n + k) || 0;

    map.set(n, (map.get(n) || 0) + 1);
  }

  return ans;
};

const nums = [1, 1], k = 0;
console.log(findPairs(nums, k));

// 1, 5
// -1, 3
// 2, 6
// -1, 3
// 3, 7

// k = 1
// 2 4 3 |x - 3| = 1
// x = |1 +- 3|
// x can be 4 2

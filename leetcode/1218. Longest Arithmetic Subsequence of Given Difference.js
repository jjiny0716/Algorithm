/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
  const map = new Map();
  for (const n of arr) {
    map.set(n, (map.get(n - difference) || 0) + 1);
  }

  return Math.max(...map.values());
};

const arr = [1,5,7,8,5,3,4,2,1], difference = -2;
console.log(longestSubsequence(arr, difference));
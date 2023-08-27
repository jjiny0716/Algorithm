/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  const div = new Array(k).fill(0);

  for (const e of arr) {
    if (e >= 0) div[e % k]++;
    else div[(k + (e % k)) % k]++;
  }

  if (div[0] % 2 !== 0) return false;

  for (let i = 1; i < k / 2; i++) {
    if (div[i] !== div[k - i]) return false;
  }

  return true;
};

const arr = [1,2,3,4,5,6], k = 10;
console.log(canArrange(arr, k));

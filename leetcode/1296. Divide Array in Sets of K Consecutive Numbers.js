/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
  if (nums.length % k !== 0) return false;

  const map = {};
  for (const n of nums) map[n] = (map[n] || 0) + 1;
  const keys = Object.keys(map).sort((a, b) => a - b).map((key) => Number(key));
  let keyIndex = 0;

  for (let i = 0 ; i < nums.length / k ; i++) {
    while (!map[keys[keyIndex]]) keyIndex++;
    for (let num = keys[keyIndex] ; num < keys[keyIndex] + k ; num++) {
      if (!map[num]) return false;
      map[num]--;
    }
  }

  return true;
};

const nums = [3,2,1,2,3,4,3,4,5,9,10,11], k = 3;
console.log(isPossibleDivide(nums, k));
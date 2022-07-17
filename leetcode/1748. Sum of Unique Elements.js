/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  const map = {}
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  return Object.entries(map).reduce((prev, [value, count]) => prev += count === 1 ? Number(value) : 0, 0);
};

const nums = [1,2,3,2];
console.log(sumOfUnique(nums));
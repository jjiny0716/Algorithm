/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
  const map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  return Object.keys(map).filter((key) => map[key] === 1 && !map[Number(key) - 1] && !map[Number(key) + 1]);
};

const nums = [10,6,5,8];
console.log(findLonely(nums));
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
  const map = {};
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  return Object.values(map).every((count) => count % 2 === 0);
};

const nums = [3,2,3,2,2,2]
console.log(divideArray(nums));

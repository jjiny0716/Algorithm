/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  
  let result = 0;
  for (let count of map.values()) {
    if (count > 1) result += count * (count - 1) / 2; 
  }

  return result;
};

const nums = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums));
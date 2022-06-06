/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const numCountMap = new Map();

  let result = 0;
  for (let num of nums) {
    numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
    result = Math.max(result, Math.max(numCountMap.get(num - 1) !== undefined ? numCountMap.get(num - 1) + numCountMap.get(num) : 0, numCountMap.get(num + 1) !== undefined ? numCountMap.get(num + 1) + numCountMap.get(num) : 0));
  }

  return result;
};

const nums = [1,3,2,2,5,2,3,7];
console.log(findLHS(nums));
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  const numCountMap = new Map();
  let deleteCount = 0;
  for (const n of nums) {
    if (numCountMap.get(k - n)) {
      numCountMap.set(k - n, numCountMap.get(k - n) - 1);
      deleteCount++;
    }
    else {
      numCountMap.set(n, (numCountMap.get(n) || 0) + 1);
    }
  }

  return deleteCount;
};

const nums = [3,1,3,4,3], k = 6;
console.log(maxOperations(nums, k));
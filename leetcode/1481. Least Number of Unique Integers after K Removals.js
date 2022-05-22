/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
  const countMap = {};
  for (let i of arr) {
    countMap[i] = (countMap[i] || 0) + 1;
  }

  let result = 0;
  for (let count of Object.values(countMap).sort((a, b) => a - b)) {
    k -= count;
    if (k < 0) result++;
  }

  return result;
};

const arr = 
[2,4,1,8,3,5,1,3], k = 3;
console.log(findLeastNumOfUniqueInts(arr, k));
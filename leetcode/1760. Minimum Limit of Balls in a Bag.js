/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  let left = 1, right = 10 ** 9;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let operationCount = 0;
    for (const n of nums) {
      operationCount += Math.floor((n - 1) / mid);
    }
    if (operationCount > maxOperations) left = mid + 1;
    else right = mid;
  }

  return left;
};
const nums = [2, 4, 8, 2],
  maxOperations = 4;
console.log(minimumSize(nums, maxOperations));

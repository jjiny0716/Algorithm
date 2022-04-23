/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let result = 0, consecutive = 0;
  for (let num of nums) {
    if (num === 0) consecutive = 0;
    else consecutive++;
    result = Math.max(result, consecutive);
  }

  return result;
};

const nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums));
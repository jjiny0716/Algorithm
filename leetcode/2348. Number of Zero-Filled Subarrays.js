/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
  nums.push(1);
  let zeroIndex = -1;
  let result = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    if (nums[i] === 0 && zeroIndex === -1) {
      zeroIndex = i;
    } 
    else if (nums[i] !== 0 && zeroIndex !== -1) {
      const n = i - zeroIndex;
      result += n * (n + 1) / 2;
      zeroIndex = -1;
    }
  }

  return result;
};

const nums = [0,0,0,2,0,0];
console.log(zeroFilledSubarray(nums));

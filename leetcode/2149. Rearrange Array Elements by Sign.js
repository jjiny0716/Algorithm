/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  let pIndex = 0, nIndex = 1;
  const result = new Array(nums.length);
  for (const n of nums) {
    if (n > 0) {
      result[pIndex] = n;
      pIndex += 2;
    }
    else {
      result[nIndex] = n;
      nIndex += 2;
    }
  }

  return result;
};

const nums = [3,1,-2,-5,2,-4];
console.log(rearrangeArray(nums));
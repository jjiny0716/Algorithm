/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  const visited = {};
  function getSetLength(here) {
    if (visited[here]) return 0;
    visited[here] = true;
    return 1 + getSetLength(nums[here]);
  }
  
  let maxLength = 0;
  for (let num of nums) {
    if (!visited[num]) maxLength = Math.max(maxLength, getSetLength(num));
  }

  return maxLength;
};

const nums = [5,4,0,3,1,6,2];
console.log(arrayNesting(nums));
/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function(groups, nums) {
  let groupIndex = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    let j;
    for (j = 0 ; j < groups[groupIndex].length ; j++) {
      if (groups[groupIndex][j] !== nums[i + j]) break;
    }
    if (j === groups[groupIndex].length) {
      groupIndex++;
      i += j - 1;
    }

    if (groupIndex === groups.length) return true;
  }

  return false;
};

const groups = [[1,-1,-1],[3,-2,0]], nums = [1,-1,0,1,-1,-1,3,-2,0]
console.log(canChoose(groups, nums));
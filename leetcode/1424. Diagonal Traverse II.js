/**
 * @param {number[][]} nums
 * @return {number[]}
 */
// 대각선 성질 이용
var findDiagonalOrder = function (nums) {
  const result = [];
  for (let y = 0 ; y < nums.length ; y++) {
    for (let x = 0 ; x < nums[0].length ; x++) {
      const i = y + x;
      if (!result[i]) result[i] = [];
      if (nums[y][x] !== undefined) result[i].push(nums[y][x]);
    }
  }
  
  return result.map(arr => arr.reverse()).flat();
};

const nums = [[1,2,3],[4,5,6],[7,8,9]];
console.log(findDiagonalOrder(nums));


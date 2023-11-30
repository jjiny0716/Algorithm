/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
  const sorted = nums.map((v, i) => [v, i]).sort(([a], [b]) => a - b);
  let left = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    if ((i === nums.length - 1) || (sorted[i + 1][0] > sorted[i][0] + limit)) {
      const slice = sorted.slice(left, i + 1);
      const values = slice.map(([v]) => v);
      const indexes = slice.map(([_, i]) => i).sort((a, b) => a - b);
      for (let j = 0 ; j < slice.length ; j++) {
        nums[indexes[j]] = values[j]; 
      }
      
      left = i + 1;
    }
  }
  
  return nums;
};

const nums = [1,7,28,19,10], limit = 3;
console.log(lexicographicallySmallestArray(nums, limit));

// limit = 4;
// 1, 56, 1, 60 

// 1, 7, 10, 19, 28

// 1, 7 10, 19,

// 
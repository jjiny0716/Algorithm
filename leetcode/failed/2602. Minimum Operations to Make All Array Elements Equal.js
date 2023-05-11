/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function(nums, queries) {
  const ascendingComp = (a, b) => a - b;
  nums.sort(ascendingComp);
  queries.sort(ascendingComp);

  const result = [];
  let leftCount = 0, rightCount = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    
  }


  return result;
};

const nums = [3,1,6,8], queries = [1,5];
console.log(minOperations(nums, queries));
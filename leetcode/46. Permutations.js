/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  const visited = new Set();

  function makeAllPermutations(permutation) {
    if (permutation.length === nums.length) {
      result.push([...permutation]);
      return;
    }

    for (let i = 0 ; i < nums.length ; i++) {
      if (visited.has(i)) continue;
      visited.add(i);
      permutation.push(nums[i]);
      makeAllPermutations(permutation);
      permutation.pop();
      visited.delete(i);
    }
  }
  makeAllPermutations([]);

  return result;
};

const nums = [1,2,3];
console.log(permute(nums));
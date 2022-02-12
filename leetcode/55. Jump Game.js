/**
 * @param {number[]} nums
 * @return {boolean}
 */
// O(n^2)?
var canJump = function (nums) {
  const reachable = Array.from({length: nums.length}, () => false);
  reachable[0] = true;

  for (let i = 0 ; i < nums.length - 1 ; i++) {
    if (!reachable[i]) continue;
    for (let j = i + 1; j < i + 1 + nums[i] ; j++) {
      reachable[j] = true;
    }
  }

  return reachable[nums.length - 1];
};


// Greedy - O(n)
var canJump2 = function (nums) {
  let max = 0;
  for (let i = 0 ; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);
  }

  return nums.length - 1 <= max;
};


console.log(canJump2([3,2,1,0,4]));

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
  const dp = new Array(nums.length).fill(false);
  let result = false;
  const helper = (i) => {
    if (result) return;
    if (dp[i]) return;
    if (i >= nums.length) {
      result = true;
      return;
    }

    if (nums[i] === nums[i + 1]) {
      dp[i] = true;
      helper(i + 2);
    }
    if (nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2]) {
      dp[i] = true;
      helper(i + 3);
    }
    else if (nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2]) {
      dp[i] = true;
      helper(i + 3);
    }

  }
  helper(0);

  return result;
};

const nums = [1,1,1,2,3,4];
console.log(validPartition(nums));
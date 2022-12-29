/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
  nums.sort((a, b) => b - a);
  const used = new Array(nums.length).fill(false);
  const subsetSum = nums.reduce((prev, cur) => prev + cur) / k;
  if (subsetSum !== Math.floor(subsetSum)) return false;
  
  const createOneSubset = () => {
    const usedIndexStack = [];
    let total = 0;

    for (let i = 0 ; i < nums.length ; i++) {
      if (used[i]) continue;
      if (subsetSum - total >= nums[i]) {
        used[i] = true;
        usedIndexStack.push(i);
        total += nums[i];
      }

      if (total === subsetSum) return true;
      if (i === nums.length - 1 && total !== subsetSum) {
        if (!usedIndexStack.length) return false;

        const prevIndex = usedIndexStack.pop();
        used[prevIndex] = false;
        total -= nums[prevIndex];
        i = prevIndex;
      }
    }

    return false;
  }

  for (let i = 0 ; i < k ; i++) {
    if (!createOneSubset()) return false;
  }

  return true;
};

const nums = [1, 2, 3, 4], k = 3;
console.log(canPartitionKSubsets(nums, k));
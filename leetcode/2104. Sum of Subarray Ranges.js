/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
  let maxSum = 0, minSum = 0;
  let cur = 0;
  const maxStack = [];

  for (let i = 0 ; i < nums.length ; i++) {
    while (maxStack.length && maxStack.at(-1)[0] <= nums[i]) {
      const [val, idx] = maxStack.pop();
      cur -= (idx - (maxStack.at(-1) || [0, -1])[1]) * val;
    }

    cur += (i - (maxStack.at(-1) || [0, -1])[1]) * nums[i];
    maxStack.push([nums[i], i]);
    maxSum += cur;
  }

  const minStack = [];
  cur = 0;
  
  for (let i = 0 ; i < nums.length ; i++) {
    while (minStack.length && minStack.at(-1)[0] >= nums[i]) {
      const [val, idx] = minStack.pop();
      cur -= (idx - (minStack.at(-1) || [0, -1])[1]) * val;
    }

    cur += (i - (minStack.at(-1) || [0, -1])[1]) * nums[i];
    minStack.push([nums[i], i]);
    minSum += cur;
  }

  return maxSum - minSum;
};

const nums = [4,-2,-3,4,1];
console.log(subArrayRanges(nums));


// [1,2,3]
// max stack
// 1
// 2
// 3

// 1 + 4 + 9


// min stack
// 1
// 12
// 123

// -1 -3 -6

// 14 - 10 = 4
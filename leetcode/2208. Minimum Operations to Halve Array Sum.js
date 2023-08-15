/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function(nums) {
  let total = nums.reduce((prev, cur) => prev + cur, 0);
  const halve = total / 2;
  const numbersQueue = new MaxPriorityQueue();
  for (const num of nums) {
    numbersQueue.enqueue(num);
  }

  let ans = 0;
  while (total > halve) {
    const largest = numbersQueue.dequeue().element;
    total -= largest / 2;
    numbersQueue.enqueue(largest / 2);
    ans++;
  }

  return ans;
};

const nums = [5,19,8,1];
console.log(halveArray(nums));
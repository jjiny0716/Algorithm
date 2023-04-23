/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
  const remainderCount = new Map();
  for (const n of nums) {
    const remainder = (n % value + value) % value;
    remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
  }

  for (let i = 0 ; i <= 10 ** 5 ; i++) {
    if (!remainderCount.get(i % value)) return i;
    remainderCount.set(i % value, remainderCount.get(i % value) - 1);
  }
};

const nums = [1,-10,7,13,6,8], value = 5;
console.log(findSmallestInteger(nums, value));

console.log((-12 % 5 + 5) % 5);
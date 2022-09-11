/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
  const a1 = [], a2 = [], a3 = [];
  for (const num of nums) {
    if (num < pivot) a1.push(num);
    else if (num === pivot) a2.push(num);
    else a3.push(num);
  }

  return [...a1, ...a2, ...a3];
};

const nums = [9,12,5,10,14,3,10], pivot = 10;
console.log(pivotArray(nums, pivot));

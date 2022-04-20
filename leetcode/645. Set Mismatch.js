/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const n = nums.length;
  const set = new Set(nums);
  let sum = 0, duplicate;
  for (let num of nums) {
    if (set.has(num)) set.delete(num);
    else duplicate = num;
    sum += num;
  }

  console.log(sum, duplicate);

  return [duplicate, duplicate + ((n * (n + 1) / 2) - sum)];
};

const nums = [1,2,2,4];
console.log(findErrorNums(nums));

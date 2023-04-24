/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const gcd = (a, b) => {
    if (a === b) return a;
    if (a > b) [a, b] = [b, a];
    return gcd(a, b - a);
  };

  let numsGcd = nums[0];
  let oneCount = 0;
  for (const n of nums) {
    if (n === 1) oneCount++;
    numsGcd = gcd(numsGcd, n);
  }

  if (numsGcd !== 1) return -1;
  if (oneCount !== 0) return nums.length - oneCount;

  let min = Infinity;
  for (let i = 0 ; i < nums.length ; i++) {
    for (let j = i ; j < nums.length ; j++) {
      if (gcd(nums[i], nums[j]) === 1) min = Math.min(min, j - i);
    }
  }

  return nums.length + min - 1;
};

const nums = [6, 10, 15];
console.log(minOperations(nums));

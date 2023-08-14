/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctPrimeFactors = function (nums) {
  const set = new Set();

  for (let num of nums) {
    let divisor = 2;
    while (num > 1) {
      if (num % divisor === 0) {
        num /= divisor;
        set.add(divisor);
      } else divisor++;
    }
  }

  return set.size;
};

const nums = [2, 4, 3, 7, 10, 6];
console.log(distinctPrimeFactors(nums));

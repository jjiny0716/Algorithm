/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
  const evenNums = nums.filter((n) => n % 2 === 0);
  return evenNums.length ? [...evenNums.reduce((map, n) => map.set(n, (map.get(n) || 0) + 1), new Map()).entries()].sort(([n1, c1], [n2, c2]) => c1 === c2 ? n1 - n2 : c2 - c1)[0][0] : -1;
};

const nums = [0,1,2,2,4,4,1];
console.log(mostFrequentEven(nums));
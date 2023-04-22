/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
  let max = 0;
  const conversionArray = [];
  for (const n of nums) {
    max = Math.max(max, n);
    conversionArray.push(n + max);
  }

  let sum = 0;
  const scoreArr = [];
  for (const n of conversionArray) {
    sum += n;
    scoreArr.push(sum);
  }

  return scoreArr;
};

const nums = [2,3,7,5,10];
console.log(findPrefixScore(nums));
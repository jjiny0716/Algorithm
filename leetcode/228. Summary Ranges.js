/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const ranges = [];
  let range = [];
  for (let num of nums) {
    if (!range.length || range.at(-1) + 1 === num) range.push(num);
    else {
      ranges.push(range);
      range = [num];
    }
  }
  if (range.length) ranges.push(range);
  
  const result = [];
  for (let r of ranges) {
    if (r.length === 1) result.push(`${r[0]}`);
    else result.push(`${r[0]}->${r.at(-1)}`);
  }

  return result;
};

const nums = [0,1,2,4,5,7];
console.log(summaryRanges(nums));
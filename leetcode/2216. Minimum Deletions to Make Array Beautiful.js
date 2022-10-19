/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function (nums) {
  const resultNums = [];
  let deleteCount = 0;
  for (const num of nums) {
    if (resultNums.length % 2 === 1 && resultNums.at(-1) === num) deleteCount++; 
    else resultNums.push(num);
  }

  return deleteCount + resultNums.length % 2;
};

const nums = [1, 1, 2, 2, 3, 3];
console.log(minDeletion(nums));

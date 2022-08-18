/**
 * @param {number[]} grades
 * @return {number}
 */
var maximumGroups = function(grades) {
  grades.sort((a, b) => a - b);
  let result = 0;
  let last = 0, lastSize = 0;
  let curSum = 0, curSize = 0;
  for (let g of grades) {
    curSum += g;
    curSize++;
    if (last < curSum && lastSize < curSize) {
      result++;
      last = curSum;
      lastSize = curSize;
      curSum = 0;
      curSize = 0;
    }
  }

  return result;
};

const grades = [10,6,12,7,3,5];
console.log(maximumGroups(grades));
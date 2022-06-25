/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
  const sum = arr.reduce((prev, cur) => prev += cur, 0);
  let partSum = 0, partCount = 0;

  for (let num of arr) {
    partSum += num;
    if (partSum === sum / 3) {
      partSum = 0;
      partCount++;
      if (partCount === 3) return true;
    }
  }

  return false;
};

const arr = [0,2,1,-6,6,7,9,-1,2,0,1];
console.log(canThreePartsEqualSum(arr));
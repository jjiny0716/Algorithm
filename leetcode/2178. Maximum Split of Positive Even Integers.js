/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
  if (finalSum % 2 === 1) return [];
  
  const result = [];
  for (let i = 2 ; finalSum > 0 ; i += 2) {
    if (i > finalSum) {
      result.push(result.pop() + finalSum);
      finalSum = 0;
    }
    else {
      result.push(i);
      finalSum -= i;
    }
  }

  return result;
};

const finalSum = 28;
console.log(maximumEvenSplit(finalSum));
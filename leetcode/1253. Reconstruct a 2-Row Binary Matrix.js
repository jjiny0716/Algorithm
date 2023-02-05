/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
  let oneCount = 0;
  for (const sum of colsum) {
    if (sum === 2) {
      upper--;
      lower--;
    }
    else if (sum === 1) oneCount++;
  }

  if (upper < 0 || lower < 0 || upper + lower !== oneCount) return [];

  const upperRow = [];
  const lowerRow = [];
  for (const sum of colsum) {
    if (sum === 0) {
      upperRow.push(0);
      lowerRow.push(0);
    }
    else if (sum === 1) {
      if (upper > 0) {
        upperRow.push(1);
        lowerRow.push(0);
        upper--;
      }
      else {
        upperRow.push(0);
        lowerRow.push(1);
      }
    }
    else if (sum === 2) {
      upperRow.push(1);
      lowerRow.push(1);
    }
  }

  return [upperRow, lowerRow];
};

const upper = 5, lower = 5, colsum = [2,1,2,0,1,0,1,2,0,1];
console.log(reconstructMatrix(upper, lower, colsum));
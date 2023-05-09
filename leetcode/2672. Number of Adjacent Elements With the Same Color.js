/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
  const array = new Array(n).fill(0);
  const result = [];
  let sameColorCount = 0;

  for (const [index, color] of queries) {
    if (array[index] !== color) {
      const lastColor = array[index];
      array[index] = color;
      if (index !== 0) {
        if (array[index] === array[index - 1]) sameColorCount++;
        else if (array[index - 1] !== 0 && lastColor === array[index - 1]) sameColorCount--;
      }
      if (index !== n - 1) {
        if (array[index] === array[index + 1]) sameColorCount++;
        else if (array[index + 1] !== 0 && lastColor === array[index + 1]) sameColorCount--;
      }
    }

    result.push(sameColorCount);
  }

  return result;
};

const n = 8, queries = [[6,2],[2,1],[0,6],[0,1],[0,4],[0,1],[5,7],[5,3],[7,6],[6,7],[0,4],[4,6],[4,2],[3,7],[4,4],[5,1]];
console.log(colorTheArray(n, queries));
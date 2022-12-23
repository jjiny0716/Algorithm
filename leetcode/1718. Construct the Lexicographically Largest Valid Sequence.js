/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
  const sequence = new Array(n * 2 - 1);
  const usingNumberSet = new Set();
  let result;
  let complete = false;

  const helper = (index = 0) => {
    if (index >= n * 2 - 1) {
      complete = true; 
      result = [...sequence];
    }
    if (complete) return;

    if (sequence[index]) {
      helper(index + 1);
      return;
    }

    for (let i = n ; i > 0 ; i--) {
      if (i !== 1 && sequence[i + index]) continue;
      if (i !== 1 && i + index >= n * 2 - 1) continue;
      if (usingNumberSet.has(i)) continue;
      sequence[index] = i; 
      usingNumberSet.add(i);
      if (i !== 1) sequence[i + index] = i; 

      helper(index + 1);

      sequence[index] = 0;
      usingNumberSet.delete(i);
      if (i !== 1) sequence[i + index] = 0;
    } 
  }
  helper();

  return result;
};

const n = 2;
console.log(constructDistancedSequence(n));
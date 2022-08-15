/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
  const map = new Map();
  for (const p of pieces) {
    map.set(p[0], p);
  }

  for (let i = 0 ; i < arr.length ; ) {
    const piece = map.get(arr[i]);
    if (!piece) return false;
    if (!piece.every((value, index) => arr[i + index] === value)) return false;
    i += piece.length;
  }

  return true;
};

const arr = [49,18,16], pieces = [[16,18,49]];
console.log(canFormArray(arr, pieces));
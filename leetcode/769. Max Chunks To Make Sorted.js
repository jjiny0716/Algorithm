/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const set = new Set();
  let length = 0,
    matchCount = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    length++;
    if (set.has(i)) {
      matchCount++;
    } else set.add(i);

    if (set.has(arr[i])) {
      matchCount++;
    } else set.add(arr[i]);

    if (length === matchCount) {
      result++;
      length = 0;
      matchCount = 0;
      set.clear();
    }
  }

  return result;
};

const arr = [1, 0, 2, 3, 4];
console.log(maxChunksToSorted(arr));

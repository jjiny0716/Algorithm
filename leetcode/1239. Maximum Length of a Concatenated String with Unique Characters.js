/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  let result = 0;

  function getResult(arr, lastIndex, charSet, length) {
    if (lastIndex >= arr.length) return;

    result = Math.max(result, length);

    for (let i = lastIndex + 1 ; i < arr.length ; i++) {
      const newCharSet = new Set([...arr[i], ...charSet]);
      if (newCharSet.size === arr[i].length + charSet.size) getResult(arr, i, newCharSet, length + arr[i].length);
    }
  }
  getResult(arr, -1, new Set(), 0);

  return result;
};

const arr = ["cha","r","act","ers"];
console.log(maxLength(arr));

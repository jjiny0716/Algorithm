/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
  let open = 0, close = 0, swapCount = 0;
  for (const c of s) {
    if (c === '[') open++;
    else close++;

    if (close > open) {
      open++;
      close--;
      swapCount++;
    }
  }

  return swapCount;
};

const s = "]]][[[";
console.log(minSwaps(s));

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  const MOD = 10 ** 9 + 7;
  horizontalCuts.sort((a, b) => a - b).push(h);
  verticalCuts.sort((a, b) => a - b).push(w);

  const findMaxSlice = (prev, cur, index, arr) =>
    Math.max(prev, cur - (arr[index - 1] ?? 0));
  const maxHeight = horizontalCuts.reduce(findMaxSlice);
  const maxWidth = verticalCuts.reduce(findMaxSlice);

  return Number(BigInt(maxHeight) * BigInt(maxWidth) % BigInt(MOD));
};

const h = 1000000000,
  w = 1000000000,
  horizontalCuts = [2],
  verticalCuts = [2];
console.log(maxArea(h, w, horizontalCuts, verticalCuts));

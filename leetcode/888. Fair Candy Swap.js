/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const bobSizeSet = new Set(bobSizes);
  const aliceSum = aliceSizes.reduce((prev, cur) => prev += cur, 0);
  const bobSum = bobSizes.reduce((prev, cur) => prev += cur, 0);
  const diff = (aliceSum - bobSum) / 2;

  for (let alice of aliceSizes) {
    if (bobSizeSet.has(alice - diff)) return [alice, alice - diff];
  }
};

const aliceSizes = [2], bobSizes = [1,3];
console.log(fairCandySwap(aliceSizes, bobSizes));
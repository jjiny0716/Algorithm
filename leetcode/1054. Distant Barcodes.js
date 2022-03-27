/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  const map = {};
  for (let barcode of barcodes) {
    map[barcode] = (map[barcode] || 0) + 1;
  }
  const counts = Object.entries(map).sort((a, b) => b[1] - a[1]);
  const result = new Array(barcodes.length);
  let countsIdx = 0;
  for (let i = 0 ; i < result.length ; i += 2) {
    result[i] = counts[countsIdx][0];
    counts[countsIdx][1]--;
    if (counts[countsIdx][1] <= 0) countsIdx++;
  }
  for (let i = 1 ; i < result.length ; i += 2) {
    result[i] = counts[countsIdx][0];
    counts[countsIdx][1]--;
    if (counts[countsIdx][1] <= 0) countsIdx++;
  }
  return result;
};

const barcodes = [1,1,1,1,2,2,3,3,4,4,4,4,4,4,4];
console.log(rearrangeBarcodes(barcodes));
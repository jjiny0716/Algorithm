/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
  const beamCounts = bank.map(row => row.split('').filter((char) => char === '1').length);
  const zeroFiltered = beamCounts.filter((count) => count !== 0);
  return zeroFiltered ? zeroFiltered.reduce((prev, cur, i, arr) => {
    if (i === 0) return 0;
    return prev + arr[i - 1] * cur;
  }, 0) : 0;
};

const bank = ["011001","000000","010100","001000"];

console.log(numberOfBeams(bank));
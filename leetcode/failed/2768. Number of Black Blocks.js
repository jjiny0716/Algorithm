/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 * space: O(n^2)
 */
var countBlackBlocks = function (m, n, coordinates) {
  const pSumMatrix = Array.from({ length: m }, () => new Array(n).fill(0));
  for (const [x, y] of coordinates) {
    pSumMatrix[y][x] = 1;
  }

  for (let y = 0; y < m; y++) {
    let blackCount = 0;
    for (let x = 0; x < n; x++) {
      if (pSumMatrix[y][x] === 1) blackCount++;
      pSumMatrix[y][x] = blackCount + (pSumMatrix?.[y - 1]?.[x] ?? 0);
    }
  }

  const result = new Array(5).fill(0);
  for (let y = 1; y < m; y++) {
    for (let x = 1; x < n; x++) {
      const blackCellCount =
        pSumMatrix[y][x] -
        (pSumMatrix?.[y - 2]?.[x] ?? 0) -
        (pSumMatrix?.[y]?.[x - 2] ?? 0) +
        (pSumMatrix?.[y - 2]?.[x - 2] ?? 0);
      result[blackCellCount]++;
    }
  }

  return result;
};

const m = 3,
  n = 3,
  coordinates = [
    [0, 0],
    [1, 1],
    [0, 2],
  ];
console.log(countBlackBlocks(m, n, coordinates));

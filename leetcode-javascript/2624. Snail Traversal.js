/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return []; 
  const result = Array.from({ length: rowsCount }, () => new Array(colsCount));

  let originalIndex = 0;
  for (let x = 0 ; x < colsCount ; x++) {
    if (x % 2 === 0) for (let y = 0 ; y < rowsCount ; y++) result[y][x] = this[originalIndex++];
    if (x % 2 === 1) for (let y = rowsCount - 1 ; y >= 0 ; y--) result[y][x] = this[originalIndex++];
  }

  return result;
}

const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
console.log(nums.snail(5, 4));
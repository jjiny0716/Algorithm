/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// bottom up
var getRow = function(rowIndex) {
  const triangle = Array.from({ length: rowIndex + 1 }, () => Array.from({ length: rowIndex + 1 }));
  triangle[0][0] = 1;
  for (let y = 1 ; y < rowIndex + 1 ; y++) {
    for (let x = 0 ; x < y + 1 ; x++) {
      triangle[y][x] = (triangle[y - 1]?.[x - 1] ?? 0) + (triangle[y - 1]?.[x] ?? 0);
    }
  }

  return triangle[rowIndex];
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// top down
var getRow = function(rowIndex) {
  const triangle = Array.from({ length: rowIndex + 1 }, () => Array.from({ length: rowIndex + 1 }));
  triangle[0][0] = 1;
  
  const calculateTriangleCell = (x, y) => {
    if (x < 0 || x > rowIndex + 1 || y < 0 || y > rowIndex + 1) return 0;
    if (x > y) return 0;
    if (triangle[y][x]) return triangle[y][x];
    return triangle[y][x] = calculateTriangleCell(x - 1, y - 1) + calculateTriangleCell(x, y - 1);
  }

  for (let x = 0 ; x < rowIndex + 1 ; x++) {
    calculateTriangleCell(x, rowIndex);
  }

  return triangle[rowIndex];
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// bottom up - O(rowIndex) space
var getRow = function(rowIndex) {
  let row = [1];
  for (let y = 1 ; y < rowIndex + 1 ; y++) {
    const newRow = [];
    for (let x = 0 ; x < y + 1 ; x++) {
      newRow.push((row[x - 1] ?? 0) + (row[x] ?? 0));
    }

    row = newRow;
  }

  return row;
};

const rowIndex = 3;
console.log(getRow(rowIndex));
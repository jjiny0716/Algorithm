/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [[1]];
  for (let y = 1 ; y < numRows ; y++) {
    const newRow = [];
    for (let x = 0 ; x <= y ; x++) {
      console.log(y, x);
      const num = (triangle[y - 1][x - 1] || 0) + (triangle[y - 1][x] || 0);
      newRow.push(num);
    }
    triangle.push(newRow);
  }

  return triangle;
};

console.log(generate(4));

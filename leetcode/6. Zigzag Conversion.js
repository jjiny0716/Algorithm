/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const lines = Array.from({length: numRows}, () => []);
  let direction = 1, pos = 0;
  for (let char of s) {
    lines[pos].push(char);
    if (numRows !== 1) pos += direction;
    if (pos === 0 || pos === numRows - 1) direction *= -1;
  }

  return lines.map(line => line.join('')).join('');
};

s = "PAYPALISHIRING", numRows = 3
console.log(convert(s, numRows));
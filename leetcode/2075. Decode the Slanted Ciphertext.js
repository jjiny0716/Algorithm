/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
  const cols = encodedText.length / rows;
  const matrix = [];
  for  (let i = 0 ; i < encodedText.length ; i += cols) {
    matrix.push(encodedText.slice(i, i + cols));
  }

  let result = "";
  for (let startCol = 0 ; startCol < cols ; startCol++) {
    for (let y = 0, x = startCol ; y < rows ; y++, x++) {
      if (matrix[y][x] === undefined) break;
      result += matrix[y][x];
    }
  }

  return result.trimEnd();
};

const encodedText = "iveo    eed   l te   olc", rows = 4;
console.log(decodeCiphertext(encodedText, rows));
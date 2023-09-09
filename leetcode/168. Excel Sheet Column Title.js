/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  const titleChars = [];
  while (columnNumber) {
    columnNumber--;
    titleChars.push(String.fromCharCode('A'.charCodeAt(0) + columnNumber % 26));
    columnNumber = Math.floor(columnNumber / 26);
  }

  return titleChars.reverse().join('');
};

const columnNumber = 701;
console.log(convertToTitle(columnNumber));
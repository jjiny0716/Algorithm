/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
  const charCountMap = new Map();
  
  for (let char of text) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  const windowMap = new Map();
  let i = 0, j;
  let result = 0;
  for (j = 0 ; j < text.length ; j++) {
    windowMap.set(text[j], (windowMap.get(text[j]) || 0) + 1);
    let counts = [...windowMap.values()];

    while (counts.reduce((sum, count) => sum += count, 0) - Math.max(...counts) >= 2) {
      windowMap.set(text[i], (windowMap.get(text[i]) || 0) - 1);
      i++;
      counts = [...windowMap.values()];
    }

    const majorChar = [...windowMap.entries()].sort((a, b) => b[1] - a[1])[0][0];
    result = Math.max(result, (counts.reduce((sum, count) => sum += count, 0) === Math.max(...counts) || charCountMap.get(majorChar) > windowMap.get(majorChar)) ? j - i + 1: j - i);
  }

  return result;
};

const text = "aaaaa";
console.log(maxRepOpt1(text));
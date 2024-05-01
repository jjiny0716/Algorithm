/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  const map = new Map();
  let count = 0;
  const isUpperCase = (c) => c === c.toUpperCase();

  for (let c of word) {
    if (isUpperCase(c)) {
      c = c.toLowerCase();
      if (map.get(c) === false) {
        map.set(c, true);
      }
      if (!map.has(c)) {
        map.set(c, null);
      }
      continue;
    }
    
    if (!map.has(c)) {
      map.set(c, false);
    }
    else if (map.get(c) === true) {
      map.set(c, null);
    }
  }

  return [...map.values()].reduce((prev, cur) => prev + (cur ? 1 : 0), 0);
};

const word = "cCceDC";
console.log(numberOfSpecialChars(word));

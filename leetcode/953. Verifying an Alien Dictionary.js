/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const orderMap = {};
  for (let i = 0 ; i < order.length ; i++) {
    orderMap[order[i]] = i;
  }

  for (let i = 0 ; i < words.length - 1 ; i++) {
    if (stringCompare(words[i], words[i + 1]) > 0) return false;
  }

  function stringCompare(str1, str2) {
    for (let i = 0 ; i < Math.min(str1.length, str2.length) ; i++) {
      if (str1[i] !== str2[i]) return orderMap[str1[i]] - orderMap[str2[i]];
    }

    return str1.length - str2.length;
  }

  return true;
};

const words = ["hello","helloo"], order = "hlabcdefgijkmnopqrstuvwxyz";
console.log(isAlienSorted(words, order));

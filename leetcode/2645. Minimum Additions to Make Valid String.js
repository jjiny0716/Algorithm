/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
  const validStr = "abc";
  const semiValidStrs = new Set(["ab", "ac", "bc"]);
  let result = 0

  for (let i = 0 ; i < word.length ; ) {
    let point = -1;
    if (i < word.length - 2 && word.slice(i, i + 3) === validStr) point = 0;
    else if (i < word.length - 1 && semiValidStrs.has(word.slice(i, i + 2))) point = 1;
    else point = 2;
    result += point;
    i += 3 - point;
  }

  return result;
};
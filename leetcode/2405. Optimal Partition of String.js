/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  const charSet = new Set();
  let result = 1;

  for (const c of s) {
    if (!charSet.has(c)) {
      charSet.add(c);
      continue;
    }

    charSet.clear();
    charSet.add(c);
    result++;
  }

  return result;
};

const s = "abacaba";
console.log(partitionString(s));
/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function(text, pattern) {
  if (pattern[0] === pattern[1]) {
    const n = text.split('').filter((c) => c === pattern[0]).length;
    return n * (n + 1) / 2;
  }
  const count = [0, 0];
  for (const c of text) {
    if (c === pattern[0]) count[0]++;
    if (c === pattern[1]) count[1]++;
  } 

  let result = Math.max(...count);
  const filteredText = text.split('').filter((c) => pattern.includes(c)).join('');
  for (const c of filteredText) {
    if (c === pattern[0]) {
      result += count[1];
      count[0]--;
    }
    else if (c === pattern[1]) {
      count[1]--;
    }
  }

  return result;
};

const text = "abcd", pattern = "aa";
console.log(maximumSubsequenceCount(text, pattern));


"fwymvreuftzgrcrxczjacqovduqaiig"
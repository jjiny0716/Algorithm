/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function(s) {
  const charCounts = new Map();
  let maxCharCount = 0;
  let charOrder = [];
  
  for (const c of s) {
    charCounts.set(c, (charCounts.get(c) || 0) + 1);
    const currentCount = charCounts.get(c);
    if (currentCount === maxCharCount) {
      charOrder.push(c);
    }
    else if (currentCount > maxCharCount) {
      maxCharCount = currentCount;
      charOrder = [c];
    }
  }
  
  return charOrder.join('');
};

const s = "aabcbbca";
console.log(lastNonEmptyString(s));
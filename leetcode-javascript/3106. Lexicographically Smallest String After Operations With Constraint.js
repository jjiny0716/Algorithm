/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(s, k) {
  const result = s.split('');
  
  for (let i = 0 ; i < s.length ; i++) {
    if (s[i] === 'a') continue;
    
    const aCost = Math.min(s.charCodeAt(i) - 'a'.charCodeAt(0), 'a'.charCodeAt(0) + 26 - s.charCodeAt(i));
    if (aCost <= k) {
      result[i] = 'a';
      k -= aCost;
      continue;
    }
    
    result[i] = String.fromCharCode(result[i].charCodeAt(0) - k);
    break;
  }
  
  return result.join('');
};

const s = "xaxcd", k = 4;
console.log(getSmallestString(s, k));
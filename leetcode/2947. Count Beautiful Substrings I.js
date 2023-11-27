/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let ans = 0;
  for (let size = 2 ; size <= s.length ; size += 2) {
    let vCount = 0, cCount = 0;
    for (let i = 0 ; i < s.length ; i++) {
      if (vowels.has(s[i])) vCount++;
      else cCount++;
      if (i < size - 1) continue;
      
      if (vCount === cCount && (vCount * cCount) % k === 0) ans++; 
      
      if (vowels.has(s[i - size + 1])) vCount--;
      else cCount--;
    }
  }
  
  return ans;
};

const s = "abba", k = 1;
console.log(beautifulSubstrings(s, k));